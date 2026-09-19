import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1f7-bc3e.css';
import '../../css/q/qf2khhs5k.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1f7-bc3e"/><path class="qf2khhs5k"/>`,
		"fallback": "ei:external-link",
	});
}

export default Component;
