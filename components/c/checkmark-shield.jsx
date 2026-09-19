import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8fiy-btz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8fiy-btz"/>`,
		"fallback": "f7:checkmark-shield",
	});
}

export default Component;
