import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s7s6vmbwl.css';
import '../../css/v/v2qy5c52w.css';
import '../../css/i/i98n4_7xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="s7s6vmbwl"/><path class="v2qy5c52w"/><path class="i98n4_7xh"/></g>`,
		"fallback": "withicons:hourglass-sketch",
	});
}

export default Component;
