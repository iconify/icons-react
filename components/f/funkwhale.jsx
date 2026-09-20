import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in4fcbbhz.css';
import '../../css/d/dellb70ic.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in4fcbbhz"/><path class="dellb70ic"/>`,
		"fallback": "selfhst:funkwhale",
	});
}

export default Component;
