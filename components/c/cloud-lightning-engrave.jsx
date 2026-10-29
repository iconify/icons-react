import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uwcumyhae.css';
import '../../css/y/yom66_bex.css';
import '../../css/g/gyp3yfelf.css';
import '../../css/z/zw-eze2dk.css';
import '../../css/n/njw_l-mjw.css';
import '../../css/e/evowombkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uwcumyhae wm-k"/><path class="wm-shadow yom66_bex"/><path class="gyp3yfelf wm-k"/><path class="wm-a zw-eze2dk"/><path class="njw_l-mjw wm-a"/><path class="evowombkz wm-shadow"/></g>`,
		"fallback": "withicons:cloud-lightning-engrave",
	});
}

export default Component;
