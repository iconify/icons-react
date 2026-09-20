import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kf3y1edrs.css';
import '../../css/w/wzh4t-1xg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="kf3y1edrs"/><path vector-effect="non-scaling-stroke" class="wzh4t-1xg"/></g>`,
		"fallback": "wordpress:cart",
	});
}

export default Component;
