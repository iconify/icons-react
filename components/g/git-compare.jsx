import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/h/h8nzk_guz.css';
import '../../css/b/bkqngzb1q.css';
import '../../css/r/ra_aqxqxr.css';
import '../../css/e/edus6lapj.css';
import '../../css/j/jgtis7b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="h8nzk_guz"/><path class="bkqngzb1q wm-shine"/><path class="ra_aqxqxr wm-k"/><path class="edus6lapj wm-a"/><path class="jgtis7b9v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:git-compare",
	});
}

export default Component;
