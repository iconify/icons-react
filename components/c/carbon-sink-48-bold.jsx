import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbd60rb4y.css';
import '../../css/x/xcc9jibon.css';
import '../../css/n/nf733ig4z.css';
import '../../css/c/ckdt7gbmp.css';
import '../../css/s/s4faz6n8b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbd60rb4y"/><path class="xcc9jibon"/><path class="nf733ig4z"/><path class="ckdt7gbmp"/><path class="s4faz6n8b"/>`,
		"fallback": "energy-icons:carbon-sink-48-bold",
	});
}

export default Component;
