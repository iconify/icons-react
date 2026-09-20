import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u_34ssbuz.css';
import '../../css/y/yakuse8di.css';
import '../../css/k/k_35l1wky.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u_34ssbuz"/><path class="yakuse8di"/><path class="k_35l1wky"/></g>`,
		"fallback": "streamline-color:cloud-wifi",
	});
}

export default Component;
