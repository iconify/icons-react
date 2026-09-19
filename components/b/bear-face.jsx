import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hskyx7mww.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hskyx7mww"/>`,
		"fallback": "game-icons:bear-face",
	});
}

export default Component;
