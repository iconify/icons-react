import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/pw0z85bxh.css';
import '../../css/w/wkpz3t54a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="pw0z85bxh"/><path class="wkpz3t54a"/></g>`,
		"fallback": "streamline-cyber:female",
	});
}

export default Component;
