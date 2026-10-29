import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r82cqdbfv.css';
import '../../css/v/veo7poupb.css';
import '../../css/f/fm6jwbcng.css';
import '../../css/c/c3puseb3z.css';
import '../../css/e/ekq5-4mjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r82cqdbfv wm-k"/><path class="veo7poupb wm-k"/><path class="fm6jwbcng wm-k"/><path class="c3puseb3z wm-shine"/><path class="ekq5-4mjo wm-a"/></g>`,
		"fallback": "withicons-anime:badge-x",
	});
}

export default Component;
