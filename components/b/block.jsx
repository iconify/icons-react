import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/bcxumnuwn.css';
import '../../css/o/oe0trmb6d.css';
import '../../css/a/az0bmdbxc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="bcxumnuwn"/><path class="oe0trmb6d"/><path class="az0bmdbxc"/></g>`,
		"fallback": "icon-park:block",
	});
}

export default Component;
