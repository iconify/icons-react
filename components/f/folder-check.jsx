import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yyao8-oxf.css';
import '../../css/z/zsfsp97yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yyao8-oxf"/><path class="zsfsp97yi"/></g>`,
		"fallback": "mynaui:folder-check",
	});
}

export default Component;
