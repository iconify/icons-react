import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhb4ejb3r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhb4ejb3r"/>`,
		"fallback": "game-icons:crow-nest",
	});
}

export default Component;
