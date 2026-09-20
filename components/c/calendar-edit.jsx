import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o79ijpb8u.css';
import '../../css/z/zqnchacxh.css';
import '../../css/a/ajqhpcbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o79ijpb8u"/><path class="zqnchacxh"/><path class="ajqhpcbca"/></g>`,
		"fallback": "reicon:calendar-edit",
	});
}

export default Component;
