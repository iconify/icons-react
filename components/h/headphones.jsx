import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/et2-czbrx.css';
import '../../css/l/lz5s0hb8v.css';
import '../../css/l/ltpyfabni.css';
import '../../css/r/r0v6itbzy.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="et2-czbrx"/><path class="lz5s0hb8v wm-shine"/><path class="ltpyfabni wm-k"/><path class="r0v6itbzy wm-a"/><path class="i49wp7b0m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:headphones",
	});
}

export default Component;
