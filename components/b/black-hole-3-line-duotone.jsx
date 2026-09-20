import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/u/uo-6xxumw.css';
import '../../css/x/xak-bxbog.css';
import '../../css/d/dw81nibwn.css';
import '../../css/y/yn9lyylvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="h_tsn8bxt"/><path class="uo-6xxumw"/><path class="xak-bxbog"/><path class="dw81nibwn"/><path class="yn9lyylvf"/></g>`,
		"fallback": "solar:black-hole-3-line-duotone",
	});
}

export default Component;
