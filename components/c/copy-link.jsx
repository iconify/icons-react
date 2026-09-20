import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/q/q5wt2mb5e.css';
import '../../css/o/o2scd7bed.css';
import '../../css/x/xrdbk_vwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="q5wt2mb5e"/><path class="o2scd7bed"/><path class="xrdbk_vwk"/></g>`,
		"fallback": "streamline-sharp-color:copy-link",
	});
}

export default Component;
