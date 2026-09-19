import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-xumvv6t.css';
import '../../css/n/ni4atqn7v.css';
import '../../css/r/rhafed4lw.css';
import '../../css/o/oopfy791f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a-xumvv6t"/><path class="ni4atqn7v"/><path class="rhafed4lw"/><path class="oopfy791f"/></g>`,
		"fallback": "icon-park:handbag",
	});
}

export default Component;
