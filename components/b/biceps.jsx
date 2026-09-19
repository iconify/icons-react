import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycy5gte1z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycy5gte1z"/>`,
		"fallback": "game-icons:biceps",
	});
}

export default Component;
