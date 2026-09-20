import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2nefrr1w.css';
import '../../css/r/rbkf42bgn.css';
import '../../css/g/gv48xt2yw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u2nefrr1w"/><path clip-rule="evenodd" class="rbkf42bgn"/><path class="gv48xt2yw"/></g>`,
		"fallback": "streamline-plump-color:business-progress-bar-2-flat",
	});
}

export default Component;
