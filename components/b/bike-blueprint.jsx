import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/kv-lv_bpm.css';
import '../../css/q/q4vihtb8m.css';
import '../../css/g/g2xclxbug.css';
import '../../css/h/hhash8oux.css';
import '../../css/g/gnvaw2b3w.css';
import '../../css/l/l84yxwbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="kv-lv_bpm wm-deco"/><path class="q4vihtb8m wm-deco"/><path class="g2xclxbug wm-deco"/><path class="hhash8oux wm-k"/><path class="gnvaw2b3w wm-a"/><path class="l84yxwbfj wm-a"/></g>`,
		"fallback": "withicons:bike-blueprint",
	});
}

export default Component;
