import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/nsqnp5fhf.css';
import '../../css/x/xnwg_sbwn.css';
import '../../css/i/i-tcsr9te.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="nsqnp5fhf"/><circle class="xnwg_sbwn"/><path class="i-tcsr9te"/></g>`,
		"fallback": "icon-park-solid:control",
	});
}

export default Component;
