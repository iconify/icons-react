import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdi7so47j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdi7so47j"/>`,
		"fallback": "game-icons:all-seeing-eye",
	});
}

export default Component;
