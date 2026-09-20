import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z55l3veoe.css';
import '../../css/w/wrmg-4b4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="z55l3veoe"/><path vector-effect="non-scaling-stroke" class="wrmg-4b4c"/></g>`,
		"fallback": "wordpress:heading-level-6",
	});
}

export default Component;
