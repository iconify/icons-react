import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/odjft_4qg.css';
import '../../css/l/lygac8m7g.css';
import '../../css/q/qv5edzb7c.css';
import '../../css/z/zz9euurfb.css';
import '../../css/h/hrkch_-vl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="odjft_4qg"/><path class="lygac8m7g"/><path class="qv5edzb7c wm-shine"/><path class="wm-k zz9euurfb"/><path class="hrkch_-vl wm-a"/></g>`,
		"fallback": "withicons-kawaii:cat",
	});
}

export default Component;
