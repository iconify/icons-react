import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6kqlu_fi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6kqlu_fi"/>`,
		"fallback": "game-icons:3d-meeple",
	});
}

export default Component;
