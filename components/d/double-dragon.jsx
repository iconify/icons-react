import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in3r41qir.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in3r41qir"/>`,
		"fallback": "game-icons:double-dragon",
	});
}

export default Component;
