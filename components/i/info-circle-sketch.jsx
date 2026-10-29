import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cvwtfk2zv.css';
import '../../css/r/r-0xcxboy.css';
import '../../css/p/plj1kabpx.css';
import '../../css/j/jqp01sc5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cvwtfk2zv"/><path class="r-0xcxboy wm-a"/><path class="plj1kabpx wm-k"/><path class="jqp01sc5u wm-a"/></g>`,
		"fallback": "withicons:info-circle-sketch",
	});
}

export default Component;
