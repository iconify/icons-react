import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzdprih6n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzdprih6n"/>`,
		"fallback": "selfhst:coursera-dark",
	});
}

export default Component;
