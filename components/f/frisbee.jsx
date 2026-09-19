import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa6q8jg6m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa6q8jg6m"/>`,
		"fallback": "game-icons:frisbee",
	});
}

export default Component;
