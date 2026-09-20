import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcaebbcnz.css';
import '../../css/n/n2luvz5yf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcaebbcnz"/><path class="n2luvz5yf"/>`,
		"fallback": "streamline-ultimate:board-game-dice-2-bold",
	});
}

export default Component;
