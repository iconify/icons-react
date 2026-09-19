import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2d37erpn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2d37erpn"/>`,
		"fallback": "game-icons:fireball",
	});
}

export default Component;
