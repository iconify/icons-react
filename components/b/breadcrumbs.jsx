import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jt1bocdew.css';
import '../../css/t/t8pjgcb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jt1bocdew"/><path vector-effect="non-scaling-stroke" class="t8pjgcb5g"/></g>`,
		"fallback": "wordpress:breadcrumbs",
	});
}

export default Component;
