import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hlsygpb9i.css';
import '../../css/s/sw4dztbjg.css';
import '../../css/i/ib__dzblr.css';
import '../../css/g/g1qd_zbpr.css';
import '../../css/c/ccure16uv.css';
import '../../css/w/w8e77_bmk.css';
import '../../css/a/ahzon8_9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hlsygpb9i"/><path class="sw4dztbjg"/><path class="ib__dzblr"/><path class="g1qd_zbpr"/><path class="ccure16uv"/><path class="w8e77_bmk"/><path class="ahzon8_9k"/></g>`,
		"fallback": "streamline-cyber-color:cheese",
	});
}

export default Component;
