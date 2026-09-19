import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzht7_bow.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzht7_bow"/>`,
		"fallback": "game-icons:arrow-cursor",
	});
}

export default Component;
