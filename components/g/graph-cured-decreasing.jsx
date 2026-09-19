import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jqoe0xbcb.css';
import '../../css/o/ozub2v37v.css';
import '../../css/r/r3_jdpb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jqoe0xbcb"/><path class="ozub2v37v"/><path class="r3_jdpb1q"/></g>`,
		"fallback": "covid:graph-cured-decreasing",
	});
}

export default Component;
