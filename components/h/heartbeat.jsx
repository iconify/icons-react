import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xig0lqbtp.css';
import '../../css/y/ywld2xbpb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="xig0lqbtp"/><path class="ywld2xbpb"/></g>`,
		"fallback": "icon-park-outline:heartbeat",
	});
}

export default Component;
