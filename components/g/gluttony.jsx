import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moq0sj2-r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moq0sj2-r"/>`,
		"fallback": "game-icons:gluttony",
	});
}

export default Component;
