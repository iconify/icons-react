import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9t50-u3n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9t50-u3n"/>`,
		"fallback": "game-icons:f1-car",
	});
}

export default Component;
