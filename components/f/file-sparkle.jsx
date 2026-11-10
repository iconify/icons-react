import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ak_vvcbmq.css';
import '../../css/j/jk9qlga9d.css';
import '../../css/h/hx1_3ybbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ak_vvcbmq"/><path class="jk9qlga9d"/><path class="hx1_3ybbj"/></g>`,
		"fallback": "andrsrxn:file-sparkle",
	});
}

export default Component;
