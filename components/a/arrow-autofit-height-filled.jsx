import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t11kll9_c.css';
import '../../css/u/utt5g789x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t11kll9_c"/><path class="utt5g789x"/></g>`,
		"fallback": "tabler:arrow-autofit-height-filled",
	});
}

export default Component;
