import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df270ab4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df270ab4n"/>`,
		"fallback": "boxicons:explosion",
	});
}

export default Component;
