import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yym57obiq.css';
import '../../css/p/p773lw_eu.css';
import '../../css/f/fnch10b_k.css';
import '../../css/t/t1rvs_b0t.css';
import '../../css/k/kyiupabxi.css';
import '../../css/j/jgtis7b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="yym57obiq"/><path class="p773lw_eu wm-shine"/><path class="fnch10b_k wm-k"/><path class="t1rvs_b0t wm-a"/><path class="kyiupabxi wm-s"/><path class="jgtis7b9v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:flip-horizontal",
	});
}

export default Component;
