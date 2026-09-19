import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybdgcfh4d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybdgcfh4d"/>`,
		"fallback": "game-icons:finish-line",
	});
}

export default Component;
