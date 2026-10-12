import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cwuhwnv2s.css';
import '../../css/z/zxcrsvhjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="cwuhwnv2s"/><path class="zxcrsvhjq"/></g>`,
		"fallback": "andrsrxn:error-502",
	});
}

export default Component;
