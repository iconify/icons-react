import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/azo0ixbyg.css';
import '../../css/a/aueu53brv.css';
import '../../css/f/f3vrx991b.css';
import '../../css/z/zk416hbox.css';
import '../../css/o/o20c8rbdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="azo0ixbyg wm-shadow"/><path class="aueu53brv"/><path class="f3vrx991b"/><path class="zk416hbox"/><path class="o20c8rbdr"/></g>`,
		"fallback": "withicons-retro:avatar-fox",
	});
}

export default Component;
