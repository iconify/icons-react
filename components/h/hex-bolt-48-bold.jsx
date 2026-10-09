import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1mxhxbto.css';
import '../../css/y/yx1n2abfm.css';
import '../../css/h/h3f5vhb2p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1mxhxbto"/><path class="yx1n2abfm"/><path class="h3f5vhb2p"/>`,
		"fallback": "energy-icons:hex-bolt-48-bold",
	});
}

export default Component;
