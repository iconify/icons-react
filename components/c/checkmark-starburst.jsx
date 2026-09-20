import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gowqhvezy.css';
import '../../css/l/l0ju07zxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gowqhvezy"/><path class="l0ju07zxe"/></g>`,
		"fallback": "proicons:checkmark-starburst",
	});
}

export default Component;
