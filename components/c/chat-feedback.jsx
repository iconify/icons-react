import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nzz_habtr.css';
import '../../css/m/m5r2ewbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nzz_habtr"/><path class="m5r2ewbsv"/></g>`,
		"fallback": "hugeicons:chat-feedback",
	});
}

export default Component;
