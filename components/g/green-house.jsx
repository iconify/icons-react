import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/a/av69xsbzx.css';
import '../../css/g/g-aobsm_h.css';
import '../../css/h/hl3iqee_p.css';
import '../../css/u/u2uf1jbsr.css';
import '../../css/w/wjxh1y9zq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="av69xsbzx"/><path class="g-aobsm_h"/><path class="hl3iqee_p"/><path class="u2uf1jbsr"/><rect class="wjxh1y9zq"/></g>`,
		"fallback": "icon-park:green-house",
	});
}

export default Component;
