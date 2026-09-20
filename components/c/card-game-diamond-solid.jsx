import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx3ex45_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hx3ex45_k"/>`,
		"fallback": "streamline-sharp:card-game-diamond-solid",
	});
}

export default Component;
