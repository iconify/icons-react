import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/da795db8g.css';
import '../../css/w/wl3vkgwgq.css';
import '../../css/r/rat7bsbmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="da795db8g"/><path class="wl3vkgwgq wm-shadow"/><path class="rat7bsbmi"/></g>`,
		"fallback": "withicons:chevron-right-engrave",
	});
}

export default Component;
