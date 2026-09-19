import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db2na1wqi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db2na1wqi"/>`,
		"fallback": "game-icons:death-juice",
	});
}

export default Component;
