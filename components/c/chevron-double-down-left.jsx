import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zh7y14b-f.css';
import '../../css/f/f9j0u2bli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zh7y14b-f"/><path class="f9j0u2bli"/></g>`,
		"fallback": "mynaui:chevron-double-down-left",
	});
}

export default Component;
