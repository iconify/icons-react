import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k1_imsrna.css';
import '../../css/d/dxcljtbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k1_imsrna"/><path class="dxcljtbfc"/></g>`,
		"fallback": "mynaui:chevron-double-down-right",
	});
}

export default Component;
