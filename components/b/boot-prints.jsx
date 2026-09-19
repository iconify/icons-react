import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp9ilbb1a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp9ilbb1a"/>`,
		"fallback": "game-icons:boot-prints",
	});
}

export default Component;
