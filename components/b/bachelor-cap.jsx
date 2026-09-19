import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/n_7zxgbdx.css';
import '../../css/c/cbs__-bag.css';
import '../../css/r/rf4rehats.css';
import '../../css/a/a6ci6d55e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="n_7zxgbdx"/><path class="cbs__-bag"/><path class="rf4rehats"/><rect class="a6ci6d55e"/></g>`,
		"fallback": "icon-park:bachelor-cap",
	});
}

export default Component;
