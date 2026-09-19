import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lisoj4jki.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lisoj4jki"/>`,
		"fallback": "game-icons:crown-of-thorns",
	});
}

export default Component;
