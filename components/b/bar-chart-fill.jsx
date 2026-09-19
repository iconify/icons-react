import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkf-l0edq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkf-l0edq"/>`,
		"fallback": "bi:bar-chart-fill",
	});
}

export default Component;
