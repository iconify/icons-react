import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o6xz30bjo.css';
import '../../css/h/hqm_jhnao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="o6xz30bjo"/><path class="hqm_jhnao"/></g>`,
		"fallback": "withicons:bold-sketch",
	});
}

export default Component;
