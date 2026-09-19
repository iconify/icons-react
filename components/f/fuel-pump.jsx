import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cwmm2ac2o.css';
import '../../css/v/vrdcg36zb.css';
import '../../css/g/g5ms_hbyx.css';
import '../../css/j/j1w8yh4ps.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cwmm2ac2o"/><path class="vrdcg36zb"/><path class="g5ms_hbyx"/><path class="j1w8yh4ps"/></g>`,
		"fallback": "fluent-emoji-flat:fuel-pump",
	});
}

export default Component;
