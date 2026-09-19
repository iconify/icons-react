import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpm6ldb2t.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpm6ldb2t"/>`,
		"fallback": "dinkie-icons:eight-of-circles-mahjong",
	});
}

export default Component;
