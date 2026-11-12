import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhjv5acyx.css';
import '../../css/v/vu03pvbnj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhjv5acyx"/><path class="vu03pvbnj"/>`,
		"fallback": "selfhst:containerssh-dark",
	});
}

export default Component;
