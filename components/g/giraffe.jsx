import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lqwztrbou.css';
import '../../css/s/sh1k6zb2q.css';
import '../../css/p/pc7mq_i4b.css';
import '../../css/e/ejv5f_b2g.css';
import '../../css/g/gwoq6gb2k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lqwztrbou"/><path class="sh1k6zb2q"/><path class="pc7mq_i4b"/><path class="ejv5f_b2g"/><path class="gwoq6gb2k"/></g>`,
		"fallback": "fluent-emoji-flat:giraffe",
	});
}

export default Component;
