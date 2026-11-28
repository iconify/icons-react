import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_hmr801k.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qc86pnbnj.css';
import '../../css/u/u-5r16bnn.css';
import '../../css/n/n34hn_bmf.css';
import '../../css/n/n64hk8xnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_hmr801k secondary"/><g class="dt0cm9dhy primary"><path class="qc86pnbnj"/><path class="u-5r16bnn"/><path class="n34hn_bmf"/><path class="n64hk8xnk"/></g>`,
		"fallback": "iconaut:buildings-duo",
	});
}

export default Component;
