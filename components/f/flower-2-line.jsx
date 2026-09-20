import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmzzx6u_m.css';
import '../../css/u/u-06obvoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xmzzx6u_m"/><path class="u-06obvoh"/>`,
		"fallback": "mingcute:flower-2-line",
	});
}

export default Component;
