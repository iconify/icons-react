import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrpj0lbxi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrpj0lbxi"/>`,
		"fallback": "game-icons:fedora",
	});
}

export default Component;
