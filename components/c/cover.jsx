import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f3qwrwc6p.css';
import '../../css/z/zyi7jybws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="f3qwrwc6p"/><path class="zyi7jybws"/></g>`,
		"fallback": "wordpress:cover",
	});
}

export default Component;
