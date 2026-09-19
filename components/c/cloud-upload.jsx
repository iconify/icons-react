import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1tar5adi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1tar5adi"/>`,
		"fallback": "game-icons:cloud-upload",
	});
}

export default Component;
