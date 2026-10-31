import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/estdgvbtb.css';
import '../../css/w/we1o4actj.css';
import '../../css/l/lg-8n1num.css';
import '../../css/u/u1of9ltii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="estdgvbtb"/><path class="we1o4actj wm-shine"/><path class="lg-8n1num wm-k"/><path class="u1of9ltii wm-a"/></g>`,
		"fallback": "withicons-kawaii:grid-2x2",
	});
}

export default Component;
