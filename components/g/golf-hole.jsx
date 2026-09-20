import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4w649b9d.css';
import '../../css/q/qp3u7nbhj.css';
import '../../css/t/t3tqarbdc.css';
import '../../css/v/vbiorlbpk.css';
import '../../css/s/s2i99wbpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c4w649b9d"/><path class="qp3u7nbhj"/><path class="t3tqarbdc"/><path class="vbiorlbpk"/><path class="s2i99wbpl"/></g>`,
		"fallback": "streamline-ultimate-color:golf-hole",
	});
}

export default Component;
