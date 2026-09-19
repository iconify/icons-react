import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpi0e_ttd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpi0e_ttd"/>`,
		"fallback": "bi:geo-alt-fill",
	});
}

export default Component;
