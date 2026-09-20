import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdt2tgb-r.css';
import '../../css/p/p__bsbi5q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdt2tgb-r"/><path class="p__bsbi5q"/>`,
		"fallback": "selfhst:calagopus-dark",
	});
}

export default Component;
