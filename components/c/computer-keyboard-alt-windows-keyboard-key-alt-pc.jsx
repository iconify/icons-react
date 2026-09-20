import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eww82xbjb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eww82xbjb"/>`,
		"fallback": "streamline:computer-keyboard-alt-windows-keyboard-key-alt-pc",
	});
}

export default Component;
