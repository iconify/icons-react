import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yprff2b0a.css';
import '../../css/p/pjpf1q9ly.css';
import '../../css/q/qsferiaro.css';
import '../../css/d/d35byld4h.css';
import '../../css/l/layqtnb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yprff2b0a"/><path class="pjpf1q9ly"/><path class="qsferiaro"/><path class="d35byld4h"/><path class="layqtnb5j"/></g>`,
		"fallback": "andrsrxn:device-pc-cloud",
	});
}

export default Component;
