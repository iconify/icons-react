import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zl0mrmb6f.css';
import '../../css/p/pa-t6xbus.css';
import '../../css/z/zbj259bhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="zl0mrmb6f"/><path class="pa-t6xbus"/><path class="zbj259bhp"/></g>`,
		"fallback": "streamline-logos:amazon-prime-video-logo-2",
	});
}

export default Component;
