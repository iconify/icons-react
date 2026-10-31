import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a5bhd2t3h.css';
import '../../css/o/o1xkpzb8n.css';
import '../../css/q/q7sgi2bce.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/z/zpoereb3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="a5bhd2t3h"/><path class="o1xkpzb8n"/><path class="q7sgi2bce wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="wm-a zpoereb3f"/></g>`,
		"fallback": "withicons-kawaii:aperture",
	});
}

export default Component;
