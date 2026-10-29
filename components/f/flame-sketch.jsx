import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z8at5w8mn.css';
import '../../css/d/d9i2tmb1h.css';
import '../../css/z/z9j954boo.css';
import '../../css/f/fy38hacrj.css';
import '../../css/l/leyxddi5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="z8at5w8mn"/><path class="d9i2tmb1h wm-k"/><path class="wm-a z9j954boo"/><path class="fy38hacrj wm-k"/><path class="leyxddi5o wm-a"/></g>`,
		"fallback": "withicons:flame-sketch",
	});
}

export default Component;
