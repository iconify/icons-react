import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x2_uxy2bi.css';
import '../../css/c/c7ls62bud.css';
import '../../css/y/yyo-cxb_u.css';
import '../../css/z/zqz-gxb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="x2_uxy2bi"/><path class="c7ls62bud"/><path class="yyo-cxb_u"/><path class="zqz-gxb1x"/></g>`,
		"fallback": "withicons-bauhaus:citrus",
	});
}

export default Component;
