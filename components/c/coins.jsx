import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op4byj90j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op4byj90j"/>`,
		"fallback": "game-icons:coins",
	});
}

export default Component;
