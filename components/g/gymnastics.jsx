import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btx30rb9t.css';
import '../../css/i/ii8shdbmi.css';
import '../../css/r/rcg5y_bhj.css';
import '../../css/r/rddpr1bgn.css';
import '../../css/a/atk5wmbtu.css';
import '../../css/p/pa46_ab9h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="btx30rb9t"><path class="ii8shdbmi"/><path class="rcg5y_bhj"/><path class="rddpr1bgn"/><path class="atk5wmbtu"/><path class="pa46_ab9h"/></g>`,
		"fallback": "icon-park:gymnastics",
	});
}

export default Component;
