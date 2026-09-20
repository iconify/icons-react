import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n38-vj_wj.css';

const viewBox = {"width":12,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n38-vj_wj"/>`,
		"fallback": "jam:accessibility",
	});
}

export default Component;
