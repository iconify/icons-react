import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sctsf2b8b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sctsf2b8b"/>`,
		"fallback": "bi:info-circle-fill",
	});
}

export default Component;
