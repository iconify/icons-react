import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a_spsac2f.css';
import '../../css/u/ux-yilqtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a_spsac2f"/><path class="ux-yilqtf"/></g>`,
		"fallback": "iconoir:copy",
	});
}

export default Component;
