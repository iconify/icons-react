import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfp9hxg1b.css';
import '../../css/x/xkv-lbb5k.css';
import '../../css/f/fdklark9r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfp9hxg1b"/><path class="xkv-lbb5k"/><path class="fdklark9r"/>`,
		"fallback": "energy-icons:cube-48-bold",
	});
}

export default Component;
