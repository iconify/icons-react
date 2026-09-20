import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pbo1_27wh.css';
import '../../css/b/bhl61jbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pbo1_27wh"/><path class="bhl61jbae"/></g>`,
		"fallback": "solar:cursor-line-duotone",
	});
}

export default Component;
