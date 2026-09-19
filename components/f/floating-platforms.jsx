import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by2_5qb6w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by2_5qb6w"/>`,
		"fallback": "game-icons:floating-platforms",
	});
}

export default Component;
