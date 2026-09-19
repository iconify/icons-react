import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rxggonbsq.css';
import '../../css/g/gd7rd8bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rxggonbsq"/><path class="gd7rd8bgo"/></g>`,
		"fallback": "hugeicons:group-layers",
	});
}

export default Component;
