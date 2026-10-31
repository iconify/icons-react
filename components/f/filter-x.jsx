import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/knevimb_t.css';
import '../../css/i/imykh6ble.css';
import '../../css/s/s0uk8_bdj.css';
import '../../css/f/f9b4d59gs.css';
import '../../css/n/nsbpcmr7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="knevimb_t"/><path class="imykh6ble wm-shine"/><path class="s0uk8_bdj wm-k"/><path class="f9b4d59gs wm-s"/><path class="nsbpcmr7p wm-deco"/></g>`,
		"fallback": "withicons-kawaii:filter-x",
	});
}

export default Component;
