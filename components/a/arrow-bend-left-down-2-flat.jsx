import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp_c66vkh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hp_c66vkh"/>`,
		"fallback": "streamline-color:arrow-bend-left-down-2-flat",
	});
}

export default Component;
