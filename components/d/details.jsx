import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vmoksubvp.css';
import '../../css/c/cbwyzgb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="vmoksubvp"/><path vector-effect="non-scaling-stroke" class="cbwyzgb4m"/></g>`,
		"fallback": "wordpress:details",
	});
}

export default Component;
