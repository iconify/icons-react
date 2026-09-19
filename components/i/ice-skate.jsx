import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rl1c9ibxq.css';
import '../../css/b/be0n_c97x.css';
import '../../css/p/p_aomcnvu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rl1c9ibxq"/><path class="be0n_c97x"/><path class="p_aomcnvu"/></g>`,
		"fallback": "fluent-emoji-flat:ice-skate",
	});
}

export default Component;
