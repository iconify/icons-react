import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br43k87zk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br43k87zk"/>`,
		"fallback": "game-icons:dead-wood",
	});
}

export default Component;
