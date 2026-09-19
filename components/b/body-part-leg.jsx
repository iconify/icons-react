import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w6e9qt2pu.css';
import '../../css/v/vcfjxsb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w6e9qt2pu"/><path class="vcfjxsb1g"/></g>`,
		"fallback": "hugeicons:body-part-leg",
	});
}

export default Component;
