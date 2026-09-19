import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddw7wxkey.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddw7wxkey"/>`,
		"fallback": "game-icons:drakkar",
	});
}

export default Component;
