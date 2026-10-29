import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eioevte6k.css';
import '../../css/r/rx57ytblr.css';
import '../../css/v/vyj2zpbth.css';
import '../../css/b/b1hapgd5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="eioevte6k"/><path class="rx57ytblr wm-a"/><path class="vyj2zpbth wm-k"/><path class="b1hapgd5x wm-a"/></g>`,
		"fallback": "withicons:file-down-sketch",
	});
}

export default Component;
