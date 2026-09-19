import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m20u9ob6h.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m20u9ob6h"/>`,
		"fallback": "fa7-brands:css3-alt",
	});
}

export default Component;
