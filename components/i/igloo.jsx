import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-r93_b4f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-r93_b4f"/>`,
		"fallback": "game-icons:igloo",
	});
}

export default Component;
