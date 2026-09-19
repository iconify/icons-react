import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/w/wgaagcbqc.css';
import '../../css/f/f6948y5wc.css';
import '../../css/l/lzerzr-1e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="wgaagcbqc"/><path class="f6948y5wc"/><path class="lzerzr-1e"/></g>`,
		"fallback": "icon-park:alignment-top-right",
	});
}

export default Component;
