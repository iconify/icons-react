import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc_uedx6x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc_uedx6x"/>`,
		"fallback": "game-icons:axolotl",
	});
}

export default Component;
