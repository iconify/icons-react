import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/irfhm6stt.css';
import '../../css/a/a0dqx_b8q.css';
import '../../css/c/chmu8x-6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="irfhm6stt"/><path class="a0dqx_b8q"/><path class="chmu8x-6e"/></g>`,
		"fallback": "tabler:carrot-off",
	});
}

export default Component;
