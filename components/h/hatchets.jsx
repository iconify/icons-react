import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbweqf9zu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbweqf9zu"/>`,
		"fallback": "game-icons:hatchets",
	});
}

export default Component;
