import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/g/gz7pzxb9g.css';
import '../../css/w/w56pzz2bw.css';
import '../../css/j/jf5hngtdr.css';
import '../../css/s/s4aoiyb6e.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><circle class="gz7pzxb9g"/><circle class="w56pzz2bw"/><circle class="jf5hngtdr"/><circle class="s4aoiyb6e"/></g>`,
		"fallback": "system-uicons:grid-circles",
	});
}

export default Component;
