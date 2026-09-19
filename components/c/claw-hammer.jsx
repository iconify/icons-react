import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eog32eskm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eog32eskm"/>`,
		"fallback": "game-icons:claw-hammer",
	});
}

export default Component;
