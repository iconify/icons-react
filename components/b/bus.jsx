import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r_6nlzbtv.css';
import '../../css/l/l-hm_u4_z.css';
import '../../css/g/g7egqccih.css';
import '../../css/q/qig_zznph.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="r_6nlzbtv"/><path class="l-hm_u4_z"/><path class="g7egqccih"/><path class="qig_zznph"/></g>`,
		"fallback": "icon-park-solid:bus",
	});
}

export default Component;
