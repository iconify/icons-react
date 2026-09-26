import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d12fgu-ud.css';
import '../../css/e/ercpunbkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="d12fgu-ud"/><path vector-effect="non-scaling-stroke" class="ercpunbkt"/></g>`,
		"fallback": "wordpress:format-bold",
	});
}

export default Component;
