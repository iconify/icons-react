import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfttfe_2y.css';
import '../../css/j/jcoe6mbmz.css';
import '../../css/m/mmo_ywq2z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qfttfe_2y"><path class="jcoe6mbmz"/><path class="mmo_ywq2z"/></g>`,
		"fallback": "catppuccin:django",
	});
}

export default Component;
