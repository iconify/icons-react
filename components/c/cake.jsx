import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gwr279xdo.css';
import '../../css/z/zioxr9brm.css';
import '../../css/i/im6ez1_gv.css';
import '../../css/z/z3qat-uzo.css';
import '../../css/p/p9-q51bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gwr279xdo wm-shadow"/><path class="zioxr9brm"/><path class="im6ez1_gv"/><path class="z3qat-uzo"/><path class="p9-q51bzt"/></g>`,
		"fallback": "withicons-retro:cake",
	});
}

export default Component;
