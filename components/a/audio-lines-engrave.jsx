import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s66pmbhpy.css';
import '../../css/p/p7b-2ibws.css';
import '../../css/j/jmojjgcoj.css';
import '../../css/w/w74_pkbuu.css';
import '../../css/x/xye5qqb6j.css';
import '../../css/o/om2raabrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="s66pmbhpy wm-k"/><path class="p7b-2ibws wm-a"/><path class="jmojjgcoj wm-shadow"/><path class="w74_pkbuu wm-a"/><path class="wm-k xye5qqb6j"/><path class="om2raabrv wm-a"/></g>`,
		"fallback": "withicons:audio-lines-engrave",
	});
}

export default Component;
