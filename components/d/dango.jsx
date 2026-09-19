import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wl9s3ujfd.css';
import '../../css/u/uspty975d.css';
import '../../css/r/rsykcvbgb.css';
import '../../css/w/wtc_1_m-x.css';
import '../../css/e/e9c_buocs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wl9s3ujfd"/><path class="uspty975d"/><path class="rsykcvbgb"/><path class="wtc_1_m-x"/><path class="e9c_buocs"/></g>`,
		"fallback": "fluent-emoji-flat:dango",
	});
}

export default Component;
