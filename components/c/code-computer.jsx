import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kd7b5hxbq.css';
import '../../css/r/rgpfwjbgz.css';
import '../../css/k/kdc0jmbbr.css';
import '../../css/y/yw489_uiw.css';
import '../../css/p/p8o016kgn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="kd7b5hxbq"/><path class="rgpfwjbgz"/><path class="kdc0jmbbr"/><path class="yw489_uiw"/><path class="p8o016kgn"/></g>`,
		"fallback": "icon-park:code-computer",
	});
}

export default Component;
