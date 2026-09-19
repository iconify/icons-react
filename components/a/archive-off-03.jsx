import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y9xadxtwz.css';
import '../../css/g/gey0_riwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y9xadxtwz"/><path class="gey0_riwv"/></g>`,
		"fallback": "hugeicons:archive-off-03",
	});
}

export default Component;
