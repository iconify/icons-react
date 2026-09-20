import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_b83abmw.css';
import '../../css/j/ja_wm2flw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n_b83abmw"/><path class="ja_wm2flw"/></g>`,
		"fallback": "tdesign:gesture-up",
	});
}

export default Component;
