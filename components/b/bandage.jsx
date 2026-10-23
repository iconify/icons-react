import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/kxgqrsb3g.css';
import '../../css/a/ab06w6wfc.css';
import '../../css/h/hv6qyvkuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="kxgqrsb3g"/><path class="ab06w6wfc"/><path class="hv6qyvkuz"/></g>`,
		"fallback": "matita:bandage",
	});
}

export default Component;
