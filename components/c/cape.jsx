import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y43eyjb9n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y43eyjb9n"/>`,
		"fallback": "game-icons:cape",
	});
}

export default Component;
