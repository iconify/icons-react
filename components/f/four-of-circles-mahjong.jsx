import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl7-40bao.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl7-40bao"/>`,
		"fallback": "dinkie-icons:four-of-circles-mahjong",
	});
}

export default Component;
