import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i83db182z.css';
import '../../css/d/dwsa8ob3o.css';
import '../../css/p/p0cq4h5-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i83db182z wm-a"/><path class="dwsa8ob3o wm-k"/><path class="p0cq4h5-v wm-a"/></g>`,
		"fallback": "withicons:hard-hat-sketch",
	});
}

export default Component;
