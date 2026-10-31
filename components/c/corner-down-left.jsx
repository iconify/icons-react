import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/x/x5v90kb3z.css';
import '../../css/b/b1qu_d_3r.css';
import '../../css/s/ssxx82d1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wm-k x5v90kb3z"/><path class="b1qu_d_3r wm-a"/><path class="ssxx82d1m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:corner-down-left",
	});
}

export default Component;
