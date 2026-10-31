import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zjho8wbzs.css';
import '../../css/e/e9zk6vbgi.css';
import '../../css/u/ul0opub_j.css';
import '../../css/q/qxku6vb8l.css';
import '../../css/v/vnkq9-bnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="zjho8wbzs"/><path class="e9zk6vbgi wm-shine"/><path class="ul0opub_j wm-k"/><path class="qxku6vb8l wm-a"/><path class="vnkq9-bnm wm-deco"/></g>`,
		"fallback": "withicons-kawaii:avatar-owl",
	});
}

export default Component;
