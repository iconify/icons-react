import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qkgp8-b-v.css';
import '../../css/l/lhjvl76yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qkgp8-b-v"/><path class="lhjvl76yi"/></g>`,
		"fallback": "hugeicons:badge-indian-rupee",
	});
}

export default Component;
