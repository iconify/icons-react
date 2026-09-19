import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g0pj_sagf.css';
import '../../css/h/hl9_4mpqh.css';
import '../../css/x/xr8gsh1az.css';
import '../../css/i/iqu_9x4pn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="g0pj_sagf"/><path class="hl9_4mpqh"/><path class="xr8gsh1az"/><path class="iqu_9x4pn"/></g>`,
		"fallback": "hugeicons:backpack-03",
	});
}

export default Component;
