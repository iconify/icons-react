import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rez96qejz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rez96qejz"/>`,
		"fallback": "game-icons:falling-bomb",
	});
}

export default Component;
