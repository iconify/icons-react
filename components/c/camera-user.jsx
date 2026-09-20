import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dys_oob-a.css';
import '../../css/o/o9dcmpxis.css';
import '../../css/x/xtc265b-b.css';
import '../../css/w/wr3_3pd8o.css';
import '../../css/g/gcumx5bwv.css';
import '../../css/o/oxswb6bdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dys_oob-a"/><path class="o9dcmpxis"/><path class="xtc265b-b"/><path class="wr3_3pd8o"/><path class="gcumx5bwv"/><path class="oxswb6bdb"/></g>`,
		"fallback": "streamline-cyber-color:camera-user",
	});
}

export default Component;
