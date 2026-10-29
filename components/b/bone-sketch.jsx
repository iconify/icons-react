import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hzlsbc5oz.css';
import '../../css/e/eb5c6r-ic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hzlsbc5oz"/><path class="eb5c6r-ic"/></g>`,
		"fallback": "withicons:bone-sketch",
	});
}

export default Component;
