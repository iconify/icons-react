import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/stm0ombpy.css';
import '../../css/s/sy9u-lkiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="stm0ombpy"/><path class="sy9u-lkiz"/></g>`,
		"fallback": "hugeicons:artificial-intelligence-08",
	});
}

export default Component;
