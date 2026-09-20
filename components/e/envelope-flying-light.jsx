import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6nvqp9jz.css';
import '../../css/t/tynapsbmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6nvqp9jz"/><path class="tynapsbmh"/>`,
		"fallback": "stash:envelope-flying-light",
	});
}

export default Component;
