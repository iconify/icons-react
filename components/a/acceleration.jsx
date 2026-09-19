import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/c/cmydvqi2y.css';
import '../../css/n/nnzwf92qp.css';
import '../../css/p/p4pt-_5pv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="cmydvqi2y"/><path class="nnzwf92qp"/><path class="p4pt-_5pv"/></g>`,
		"fallback": "icon-park-outline:acceleration",
	});
}

export default Component;
