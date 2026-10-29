import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b-jcbhbow.css';
import '../../css/o/oi09glzat.css';
import '../../css/s/saw55rb-m.css';
import '../../css/g/gfb62bt5g.css';
import '../../css/c/ck_6qidwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b-jcbhbow wm-k"/><path class="oi09glzat wm-a"/><path class="saw55rb-m wm-shadow"/><path class="gfb62bt5g wm-k"/><path class="ck_6qidwg wm-a"/></g>`,
		"fallback": "withicons:contact-engrave",
	});
}

export default Component;
