import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8rpcmbtb.css';
import '../../css/q/qeaq1eplb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8rpcmbtb"/><path class="qeaq1eplb"/>`,
		"fallback": "energy-icons:fuse-20",
	});
}

export default Component;
