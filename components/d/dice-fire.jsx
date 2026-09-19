import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib_cetbqx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib_cetbqx"/>`,
		"fallback": "game-icons:dice-fire",
	});
}

export default Component;
