import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpptukm0u.css';
import '../../css/b/bkvywwbqo.css';
import '../../css/t/t1b1reb-i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpptukm0u"/><path class="bkvywwbqo"/><path class="t1b1reb-i"/>`,
		"fallback": "selfhst:containerssh",
	});
}

export default Component;
