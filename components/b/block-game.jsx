import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wot1xhjvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wot1xhjvg"/>`,
		"fallback": "hugeicons:block-game",
	});
}

export default Component;
