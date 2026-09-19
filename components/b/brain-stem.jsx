import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9wkehbwv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9wkehbwv"/>`,
		"fallback": "game-icons:brain-stem",
	});
}

export default Component;
