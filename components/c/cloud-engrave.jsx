import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/do26crbva.css';
import '../../css/f/ftut6hr7j.css';
import '../../css/c/cvilh7buk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="do26crbva"/><path class="ftut6hr7j wm-shadow"/><path class="cvilh7buk"/></g>`,
		"fallback": "withicons:cloud-engrave",
	});
}

export default Component;
