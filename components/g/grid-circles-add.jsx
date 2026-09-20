import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/w/w56pzz2bw.css';
import '../../css/g/gz7pzxb9g.css';
import '../../css/j/jf5hngtdr.css';
import '../../css/a/a-yjgsg3s.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><circle class="w56pzz2bw"/><circle class="gz7pzxb9g"/><circle class="jf5hngtdr"/><path class="a-yjgsg3s"/></g>`,
		"fallback": "system-uicons:grid-circles-add",
	});
}

export default Component;
