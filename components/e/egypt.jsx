import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta2xki0fc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta2xki0fc"/>`,
		"fallback": "game-icons:egypt",
	});
}

export default Component;
