import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ysb2jqb3w.css';
import '../../css/t/t8h18ggpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="ysb2jqb3w"/><path vector-effect="non-scaling-stroke" class="t8h18ggpb"/></g>`,
		"fallback": "wordpress:column",
	});
}

export default Component;
