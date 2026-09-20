import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i13u8jhwr.css';
import '../../css/n/n8nv_fb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i13u8jhwr"/><path class="n8nv_fb1l"/></g>`,
		"fallback": "tabler:compass-off",
	});
}

export default Component;
