import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg5au16ih.css';
import '../../css/m/mrndicbcc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg5au16ih"/><path class="mrndicbcc"/>`,
		"fallback": "carbon:ice-vision",
	});
}

export default Component;
