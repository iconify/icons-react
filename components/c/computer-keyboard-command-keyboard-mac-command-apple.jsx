import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u89zr7b9a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u89zr7b9a"/>`,
		"fallback": "streamline:computer-keyboard-command-keyboard-mac-command-apple",
	});
}

export default Component;
