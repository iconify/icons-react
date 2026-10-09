import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri3k7ob7e.css';
import '../../css/a/a-4s07bqr.css';
import '../../css/b/bxzxb8v8d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri3k7ob7e"/><path class="a-4s07bqr"/><path class="bxzxb8v8d"/>`,
		"fallback": "energy-icons:battery-alert-48",
	});
}

export default Component;
