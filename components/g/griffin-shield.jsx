import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfxtc6d7o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfxtc6d7o"/>`,
		"fallback": "game-icons:griffin-shield",
	});
}

export default Component;
