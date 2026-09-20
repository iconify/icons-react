import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lv_x1kbjx.css';
import '../../css/x/xuaujacrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lv_x1kbjx"/><path class="xuaujacrz"/></g>`,
		"fallback": "mynaui:cloud-lightning",
	});
}

export default Component;
