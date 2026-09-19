import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2finz0wr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2finz0wr"/>`,
		"fallback": "bx:bx-volume-mute",
	});
}

export default Component;
