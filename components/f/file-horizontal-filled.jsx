import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ip6q-riwl.css';
import '../../css/q/qce1_5bob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ip6q-riwl"/><path class="qce1_5bob"/></g>`,
		"fallback": "tabler:file-horizontal-filled",
	});
}

export default Component;
