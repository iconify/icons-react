import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkvjprb7w.css';
import '../../css/w/w4yohibkr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkvjprb7w"/><path class="w4yohibkr"/>`,
		"fallback": "selfhst:containerssh-light",
	});
}

export default Component;
