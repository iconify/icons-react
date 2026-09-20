import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/w/wf1_a3_wl.css';
import '../../css/p/prp29o_1b.css';
import '../../css/x/xq_kjdbuu.css';
import '../../css/e/e17umlb7o.css';
import '../../css/v/v6kv9rbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="wf1_a3_wl"/><path class="prp29o_1b"/><path class="xq_kjdbuu"/><path class="e17umlb7o"/><path class="v6kv9rbyb"/></g>`,
		"fallback": "streamline-cyber:camera-8",
	});
}

export default Component;
