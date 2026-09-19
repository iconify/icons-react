import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vces4wbou.css';
import '../../css/f/fb_51sb_m.css';
import '../../css/j/jxsnms7hz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="vces4wbou"/><circle class="fb_51sb_m"/><path class="jxsnms7hz"/></g>`,
		"fallback": "icon-park-solid:division",
	});
}

export default Component;
