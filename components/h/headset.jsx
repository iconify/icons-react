import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cvk-bup-z.css';
import '../../css/i/iatj5le9x.css';
import '../../css/j/j2t9-upmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cvk-bup-z wm-a"/><path class="iatj5le9x"/><path class="j2t9-upmx wm-a"/></g>`,
		"fallback": "withicons:headset",
	});
}

export default Component;
