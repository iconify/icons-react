import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/syb471bdu.css';
import '../../css/i/iv9pp7bql.css';
import '../../css/i/i36oxtb3i.css';
import '../../css/w/waxdr2c7j.css';
import '../../css/a/a4bj_923c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="syb471bdu"/><path class="iv9pp7bql wm-k"/><path class="i36oxtb3i wm-a"/><path class="waxdr2c7j wm-k"/><path class="a4bj_923c wm-a"/></g>`,
		"fallback": "withicons:flag-sketch",
	});
}

export default Component;
