import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v21qiwb4s.css';
import '../../css/j/jlp2h3dkt.css';
import '../../css/o/o8bu-3b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v21qiwb4s"/><path class="jlp2h3dkt"/><path class="o8bu-3b8u"/></g>`,
		"fallback": "solar:folder-sync-linear",
	});
}

export default Component;
