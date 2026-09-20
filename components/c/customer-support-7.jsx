import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7wny9bqn.css';
import '../../css/m/my98_rssl.css';
import '../../css/i/iklyi5b-w.css';
import '../../css/s/s8r4xzfnl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a7wny9bqn"/><path class="my98_rssl"/><path class="iklyi5b-w"/><path class="s8r4xzfnl"/></g>`,
		"fallback": "streamline-flex-color:customer-support-7",
	});
}

export default Component;
