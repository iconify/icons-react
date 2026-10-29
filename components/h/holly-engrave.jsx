import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w72h1h5zq.css';
import '../../css/h/hf2cx4ppo.css';
import '../../css/n/n37qylb6g.css';
import '../../css/l/lh_y89hot.css';
import '../../css/t/tjlpedbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w72h1h5zq wm-k"/><path class="hf2cx4ppo wm-a"/><path class="n37qylb6g wm-shadow"/><path class="lh_y89hot wm-k"/><path class="tjlpedbiu wm-a"/></g>`,
		"fallback": "withicons:holly-engrave",
	});
}

export default Component;
