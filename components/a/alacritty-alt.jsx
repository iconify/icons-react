import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_f4z8bdu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_f4z8bdu"/>`,
		"fallback": "file-icons:alacritty-alt",
	});
}

export default Component;
