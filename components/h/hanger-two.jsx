import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hfbsm1a_v.css';
import '../../css/v/ve3fiub2m.css';
import '../../css/w/w72sghb3d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="hfbsm1a_v"/><path class="ve3fiub2m"/><path class="w72sghb3d"/></g>`,
		"fallback": "icon-park-solid:hanger-two",
	});
}

export default Component;
