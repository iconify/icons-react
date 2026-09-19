import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/sb_r789-u.css';
import '../../css/z/zhgmyyzqz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="sb_r789-u"/><path class="zhgmyyzqz"/></g>`,
		"fallback": "icon-park:clothes-crew-neck",
	});
}

export default Component;
