import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vhis9r0cf.css';
import '../../css/g/g3kyg4buc.css';
import '../../css/r/rhvdhhbhs.css';
import '../../css/x/xdod-xv-c.css';
import '../../css/e/ebgwytbri.css';
import '../../css/m/m2nu40i7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="vhis9r0cf wm-shadow"/><path class="g3kyg4buc"/><path class="rhvdhhbhs"/><path class="xdod-xv-c"/><path class="ebgwytbri wm-shine"/><path class="m2nu40i7l wm-deco"/></g>`,
		"fallback": "withicons-sticker:align-center",
	});
}

export default Component;
