import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bs-0tobgd.css';
import '../../css/w/wsn2doldj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bs-0tobgd"/><path class="wsn2doldj"/></g>`,
		"fallback": "tdesign:gesture-right",
	});
}

export default Component;
