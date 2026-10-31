import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/ichxfjb4s.css';
import '../../css/d/dq52hjbax.css';
import '../../css/t/t8k0bbs6g.css';
import '../../css/q/qrwfd8ber.css';
import '../../css/u/ugzrm7bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ichxfjb4s"/><path class="dq52hjbax wm-shine"/><path class="t8k0bbs6g wm-k"/><path class="qrwfd8ber wm-a"/><path class="ugzrm7bka wm-deco"/></g>`,
		"fallback": "withicons-kawaii:golf",
	});
}

export default Component;
