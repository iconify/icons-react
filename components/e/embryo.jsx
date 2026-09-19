import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aefv87_qi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aefv87_qi"/>`,
		"fallback": "game-icons:embryo",
	});
}

export default Component;
