import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bszj431is.css';
import '../../css/s/st2v-vblh.css';
import '../../css/l/lfk3ytbtu.css';
import '../../css/r/rphlimb5e.css';
import '../../css/m/mcz9ghbyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bszj431is"/><path class="st2v-vblh"/><path class="lfk3ytbtu"/><path class="rphlimb5e"/><path class="mcz9ghbyd"/></g>`,
		"fallback": "hugeicons:ev-charging",
	});
}

export default Component;
