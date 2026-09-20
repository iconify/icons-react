import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fagntxw4g.css';
import '../../css/t/tqmas5pkf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fagntxw4g"/><path class="tqmas5pkf"/>`,
		"fallback": "selfhst:chibisafe-light",
	});
}

export default Component;
