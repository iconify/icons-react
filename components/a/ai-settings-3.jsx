import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q81gqcbkz.css';
import '../../css/q/qvyfqbclq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q81gqcbkz"/><path class="qvyfqbclq"/></g>`,
		"fallback": "pixelarticons:ai-settings-3",
	});
}

export default Component;
