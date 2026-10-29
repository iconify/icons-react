import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f_d6gcbvr.css';
import '../../css/e/e82k79bum.css';
import '../../css/o/oix2qy57j.css';
import '../../css/e/eu5ukbiiu.css';
import '../../css/w/wotccxbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f_d6gcbvr wm-k"/><path class="e82k79bum wm-a"/><path class="oix2qy57j wm-shadow"/><path class="eu5ukbiiu wm-a"/><path class="wm-k wotccxbib"/></g>`,
		"fallback": "withicons:folder-open-engrave",
	});
}

export default Component;
