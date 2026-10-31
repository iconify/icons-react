import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/c/c3237s2cq.css';
import '../../css/k/kx81f8bnu.css';
import '../../css/o/ozqxqdb2l.css';
import '../../css/x/xcez03_th.css';
import '../../css/n/nnfke78sg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="c3237s2cq"/><path class="kx81f8bnu wm-shine"/><path class="ozqxqdb2l wm-k"/><path class="wm-a xcez03_th"/><path class="nnfke78sg wm-deco"/></g>`,
		"fallback": "withicons-kawaii:cricket",
	});
}

export default Component;
