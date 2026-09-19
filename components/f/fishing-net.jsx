import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v__9k2bvh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v__9k2bvh"/>`,
		"fallback": "game-icons:fishing-net",
	});
}

export default Component;
