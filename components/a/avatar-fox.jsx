import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/f9bkr9b0d.css';
import '../../css/k/kn21p-bsc.css';
import '../../css/i/ic2cm1n6f.css';
import '../../css/c/cfl4hib-o.css';
import '../../css/r/rhc7k_bkq.css';
import '../../css/s/sfg4-ob9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="f9bkr9b0d"/><path class="kn21p-bsc"/><path class="ic2cm1n6f wm-shine"/><path class="cfl4hib-o wm-k"/><path class="rhc7k_bkq wm-a"/><path class="sfg4-ob9o wm-deco"/></g>`,
		"fallback": "withicons-kawaii:avatar-fox",
	});
}

export default Component;
