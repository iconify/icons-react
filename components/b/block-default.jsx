import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/khnkwnjrb.css';
import '../../css/i/ioxg8cbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="khnkwnjrb"/><path vector-effect="non-scaling-stroke" class="ioxg8cbss"/></g>`,
		"fallback": "wordpress:block-default",
	});
}

export default Component;
