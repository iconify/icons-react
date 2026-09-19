import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oul4phlqy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oul4phlqy"/>`,
		"fallback": "game-icons:honeypot",
	});
}

export default Component;
