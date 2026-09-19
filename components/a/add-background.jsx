import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/h/h63kkxb3c.css';
import '../../css/p/pz6f_ubsp.css';
import '../../css/p/powe2c5ch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="h63kkxb3c"/><path class="pz6f_ubsp"/><path class="powe2c5ch"/></g>`,
		"fallback": "codex:add-background",
	});
}

export default Component;
