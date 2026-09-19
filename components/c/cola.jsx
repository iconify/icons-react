import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/g/g3k3sybmt.css';
import '../../css/r/rqcd37tkp.css';
import '../../css/x/xec1e65iq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="g3k3sybmt"/><path class="rqcd37tkp"/><path class="xec1e65iq"/></g>`,
		"fallback": "icon-park-outline:cola",
	});
}

export default Component;
