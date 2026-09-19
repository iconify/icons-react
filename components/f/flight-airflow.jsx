import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/f/f43rkvbca.css';
import '../../css/v/v31f7nbht.css';
import '../../css/h/hh9gxlbei.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="f43rkvbca"/><path class="v31f7nbht"/><path class="hh9gxlbei"/></g>`,
		"fallback": "icon-park:flight-airflow",
	});
}

export default Component;
