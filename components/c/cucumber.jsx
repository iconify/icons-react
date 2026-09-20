import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z1u9cxbgl.css';
import '../../css/x/xh2lgbbiy.css';
import '../../css/z/zsv03u5kq.css';
import '../../css/n/n7d_avo5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z1u9cxbgl"/><path class="xh2lgbbiy"/><path class="zsv03u5kq"/><path class="n7d_avo5m"/></g>`,
		"fallback": "tdesign:cucumber",
	});
}

export default Component;
