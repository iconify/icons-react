import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tav3z1unb.css';

const viewBox = {"width":830,"height":750};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tav3z1unb"/>`,
		"fallback": "il:behance",
	});
}

export default Component;
