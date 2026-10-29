import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xdroklb6f.css';
import '../../css/x/xjhgi0g1x.css';
import '../../css/p/pf9mtmbdy.css';
import '../../css/z/zbv0h6bgp.css';
import '../../css/e/e_hvle-fh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xdroklb6f"/><path class="wm-a xjhgi0g1x"/><path class="pf9mtmbdy wm-shadow"/><path class="wm-k zbv0h6bgp"/><path class="e_hvle-fh wm-a"/></g>`,
		"fallback": "withicons:folders-engrave",
	});
}

export default Component;
