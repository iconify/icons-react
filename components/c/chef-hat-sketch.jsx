import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yv00_jbgb.css';
import '../../css/m/m-1en5bcn.css';
import '../../css/t/t8rssobqf.css';
import '../../css/g/g2_80jbow.css';
import '../../css/o/os7a8djmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="yv00_jbgb"/><path class="m-1en5bcn wm-k"/><path class="t8rssobqf wm-a"/><path class="g2_80jbow wm-k"/><path class="os7a8djmh wm-a"/></g>`,
		"fallback": "withicons:chef-hat-sketch",
	});
}

export default Component;
