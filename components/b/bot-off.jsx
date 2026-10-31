import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/iy4kf9bde.css';
import '../../css/o/oprhs5bpw.css';
import '../../css/k/kv8k2xgor.css';
import '../../css/j/j29ih9old.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="iy4kf9bde"/><path class="oprhs5bpw wm-shine"/><path class="kv8k2xgor wm-k"/><path class="j29ih9old wm-a"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons-kawaii:bot-off",
	});
}

export default Component;
