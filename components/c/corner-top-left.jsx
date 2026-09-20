import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke0_784jc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke0_784jc"/>`,
		"fallback": "radix-icons:corner-top-left",
	});
}

export default Component;
