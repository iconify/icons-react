import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpptukm0u.css';
import '../../css/b/bkvywwbqo.css';
import '../../css/y/ypxrjb7gy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpptukm0u"/><path class="bkvywwbqo"/><path class="ypxrjb7gy"/>`,
		"fallback": "selfhst:containerssh",
	});
}

export default Component;
