import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg-wgrjyj.css';
import '../../css/l/lmzdaxwoj.css';
import '../../css/n/nd2aiyu9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="yg-wgrjyj"><path class="lmzdaxwoj"/><path class="nd2aiyu9q"/></g>`,
		"fallback": "iconoir:gas-tank-droplet",
	});
}

export default Component;
