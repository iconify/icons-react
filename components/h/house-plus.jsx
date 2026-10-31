import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jf8khup_j.css';
import '../../css/n/ns192kvnn.css';
import '../../css/n/nmkvyox4w.css';
import '../../css/z/zojuovb7p.css';
import '../../css/d/dsgtj7bqy.css';
import '../../css/s/sy-bg3qlw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jf8khup_j wm-shadow"/><path class="ns192kvnn"/><path class="nmkvyox4w"/><path class="zojuovb7p"/><path class="dsgtj7bqy"/><path class="sy-bg3qlw"/></g>`,
		"fallback": "withicons-retro:house-plus",
	});
}

export default Component;
