import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b34y5p2yc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b34y5p2yc"/>`,
		"fallback": "dinkie-icons:green-dragon-mahjong",
	});
}

export default Component;
