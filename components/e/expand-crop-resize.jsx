import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/i/icz6_1e1o.css';
import '../../css/b/b1ksy1x7d.css';
import '../../css/r/rd72t1bvk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="icz6_1e1o"/><path class="b1ksy1x7d"/><path class="rd72t1bvk"/></g>`,
		"fallback": "streamline-flex:expand-crop-resize",
	});
}

export default Component;
