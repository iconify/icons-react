import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qor6go1jn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qor6go1jn"/>`,
		"fallback": "game-icons:game-console",
	});
}

export default Component;
