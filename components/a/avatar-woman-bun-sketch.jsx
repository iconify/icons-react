import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zhfr4tbaq.css';
import '../../css/e/eo_o8eb7r.css';
import '../../css/t/tqwue9bav.css';
import '../../css/g/g-wgd2bcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="zhfr4tbaq"/><path class="eo_o8eb7r wm-k"/><path class="tqwue9bav wm-a"/><path class="g-wgd2bcx"/></g>`,
		"fallback": "withicons:avatar-woman-bun-sketch",
	});
}

export default Component;
