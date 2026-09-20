import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hj8s4cc_v.css';
import '../../css/b/bchj5u3vv.css';
import '../../css/y/y3gb2lb4j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hj8s4cc_v"/><path clip-rule="evenodd" class="bchj5u3vv"/><path class="y3gb2lb4j"/></g>`,
		"fallback": "streamline-plump-color:fish-flat",
	});
}

export default Component;
