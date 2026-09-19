import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu74euvyi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu74euvyi"/>`,
		"fallback": "game-icons:inauguration",
	});
}

export default Component;
