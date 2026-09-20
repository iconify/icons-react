import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i11mw4q0n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i11mw4q0n"/>`,
		"fallback": "streamline:drone-solid",
	});
}

export default Component;
