import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/spe57dsip.css';
import '../../css/r/r6zdo0mwd.css';
import '../../css/z/zki05l2_a.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="spe57dsip"/><path class="r6zdo0mwd wm-k"/><path class="wm-a zki05l2_a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:clover",
	});
}

export default Component;
