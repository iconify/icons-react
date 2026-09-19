import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dunh3ea7o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dunh3ea7o"/>`,
		"fallback": "game-icons:caterpillar",
	});
}

export default Component;
