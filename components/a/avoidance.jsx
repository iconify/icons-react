import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmkk5btqo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmkk5btqo"/>`,
		"fallback": "game-icons:avoidance",
	});
}

export default Component;
