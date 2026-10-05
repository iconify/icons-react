import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/q3tvm8bbi.css';
import '../../css/o/oz0g4by4m.css';
import '../../css/h/hzarsdbal.css';
import '../../css/r/r9d8tnb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="q3tvm8bbi"/><path class="oz0g4by4m"/><path class="hzarsdbal"/><path class="r9d8tnb2r"/></g>`,
		"fallback": "matita:bell-off",
	});
}

export default Component;
