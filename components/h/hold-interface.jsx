import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/j/jnakdhbal.css';
import '../../css/r/rf0doac_z.css';
import '../../css/l/lbg5hjbdn.css';
import '../../css/r/rf1fvibfz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="jnakdhbal"/><path class="rf0doac_z"/><rect class="lbg5hjbdn"/><path class="rf1fvibfz"/></g>`,
		"fallback": "icon-park:hold-interface",
	});
}

export default Component;
