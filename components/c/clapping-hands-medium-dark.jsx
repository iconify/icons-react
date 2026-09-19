import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l6bo7z4nj.css';
import '../../css/w/wiimycc-x.css';
import '../../css/t/t4p_o0eck.css';
import '../../css/i/icsnghbsk.css';
import '../../css/s/s-a4cubto.css';
import '../../css/c/cfx1q448n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l6bo7z4nj"/><path class="wiimycc-x"/><path class="t4p_o0eck"/><path class="icsnghbsk"/><path class="s-a4cubto"/><path class="cfx1q448n"/></g>`,
		"fallback": "fluent-emoji-flat:clapping-hands-medium-dark",
	});
}

export default Component;
