import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzvbmsb0n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzvbmsb0n"/>`,
		"fallback": "game-icons:fingers-crossed",
	});
}

export default Component;
