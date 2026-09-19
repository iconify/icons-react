import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eekdnvb9f.css';
import '../../css/r/rny1hf1ul.css';
import '../../css/d/dwjzx_b6h.css';
import '../../css/b/bqc6x6b6e.css';
import '../../css/k/kob9_nwwz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eekdnvb9f"/><path class="rny1hf1ul"/><path class="dwjzx_b6h"/><path class="bqc6x6b6e"/><path class="kob9_nwwz"/></g>`,
		"fallback": "fluent-emoji-flat:butterfly",
	});
}

export default Component;
