import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v21qiwb4s.css';
import '../../css/v/v8q8aba5g.css';
import '../../css/y/yubg-_bwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v21qiwb4s"/><path class="v8q8aba5g"/><path class="yubg-_bwo"/></g>`,
		"fallback": "solar:folder-sync-line-duotone",
	});
}

export default Component;
