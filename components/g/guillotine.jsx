import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi91uw82s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi91uw82s"/>`,
		"fallback": "game-icons:guillotine",
	});
}

export default Component;
