import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8sjw-c0k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8sjw-c0k"/>`,
		"fallback": "game-icons:expanded-rays",
	});
}

export default Component;
