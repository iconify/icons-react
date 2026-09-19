import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nd__e9bwe.css';
import '../../css/x/xukwvbc4u.css';
import '../../css/j/j2dz8xbde.css';
import '../../css/r/rcrg8_0kv.css';
import '../../css/r/ryfi9jbiy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nd__e9bwe"/><circle class="xukwvbc4u"/><circle class="j2dz8xbde"/><circle class="rcrg8_0kv"/><circle class="ryfi9jbiy"/></g>`,
		"fallback": "icon-park:frog",
	});
}

export default Component;
