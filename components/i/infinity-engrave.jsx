import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jd9mkhbdr.css';
import '../../css/o/omerkobbu.css';
import '../../css/t/tef1dsoih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jd9mkhbdr"/><path class="omerkobbu wm-shadow"/><path class="tef1dsoih"/></g>`,
		"fallback": "withicons:infinity-engrave",
	});
}

export default Component;
