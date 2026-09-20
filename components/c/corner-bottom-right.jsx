import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pk9gzk-lh.css';
import '../../css/m/mbqv50tkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="pk9gzk-lh"/><path vector-effect="non-scaling-stroke" class="mbqv50tkh"/></g>`,
		"fallback": "wordpress:corner-bottom-right",
	});
}

export default Component;
