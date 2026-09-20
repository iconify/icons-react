import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nwoy77b0r.css';
import '../../css/l/l16f_zxlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nwoy77b0r"/><path class="l16f_zxlx"/></g>`,
		"fallback": "mage:fast-forward",
	});
}

export default Component;
