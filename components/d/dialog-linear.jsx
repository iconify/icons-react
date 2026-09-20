import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iepueqoam.css';
import '../../css/p/pddlj0b6t.css';
import '../../css/y/ye66fobzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iepueqoam"/><path class="pddlj0b6t"/><path class="ye66fobzo"/></g>`,
		"fallback": "solar:dialog-linear",
	});
}

export default Component;
