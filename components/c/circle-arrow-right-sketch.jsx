import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h7vn52bat.css';
import '../../css/x/x_vesxj5e.css';
import '../../css/j/jva_12v9r.css';
import '../../css/h/hl7p31idu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="h7vn52bat"/><path class="wm-k x_vesxj5e"/><path class="jva_12v9r wm-a"/><path class="hl7p31idu wm-a"/></g>`,
		"fallback": "withicons:circle-arrow-right-sketch",
	});
}

export default Component;
