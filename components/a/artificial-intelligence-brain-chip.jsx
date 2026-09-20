import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j9sgb1nrp.css';
import '../../css/p/powh_abbb.css';
import '../../css/t/t7l5wsblx.css';
import '../../css/h/hb9r-3bte.css';
import '../../css/y/y_k0420kv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j9sgb1nrp"/><path class="powh_abbb"/><path class="t7l5wsblx"/><path class="hb9r-3bte"/><path class="y_k0420kv"/></g>`,
		"fallback": "streamline-flex-color:artificial-intelligence-brain-chip",
	});
}

export default Component;
