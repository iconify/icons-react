import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/ma7sgrb7k.css';
import '../../css/x/xrq2kxblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ma7sgrb7k"/><path class="xrq2kxblp"/></g>`,
		"fallback": "evicons:charging-power-level",
	});
}

export default Component;
