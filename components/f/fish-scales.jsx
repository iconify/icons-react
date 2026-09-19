import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuaigmbff.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuaigmbff"/>`,
		"fallback": "game-icons:fish-scales",
	});
}

export default Component;
