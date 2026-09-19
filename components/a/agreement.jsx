import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/y/y0r_bqb0y.css';
import '../../css/p/pamz0ebce.css';
import '../../css/t/t_lxoibsf.css';
import '../../css/d/dfxbr7wll.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><rect class="y0r_bqb0y"/><path class="pamz0ebce"/><path class="t_lxoibsf"/><path class="dfxbr7wll"/></g>`,
		"fallback": "icon-park:agreement",
	});
}

export default Component;
