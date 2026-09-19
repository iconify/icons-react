import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd7pb6bfm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd7pb6bfm"/>`,
		"fallback": "dinkie-icons:chrysanthemum-mahjong",
	});
}

export default Component;
