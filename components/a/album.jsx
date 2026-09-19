import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y07wqubtc.css';
import '../../css/w/wckr9kb1z.css';
import '../../css/h/hd5qmml4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="y07wqubtc"/><path class="wckr9kb1z"/><path class="hd5qmml4t"/>`,
		"fallback": "bx:album",
	});
}

export default Component;
