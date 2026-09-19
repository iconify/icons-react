import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lokcj0ime.css';
import '../../css/j/j5pmud_cy.css';
import '../../css/c/coxnvyqqt.css';
import '../../css/y/ygttpsbfk.css';
import '../../css/c/cu2r7qb-i.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lokcj0ime"/><path class="j5pmud_cy"/><path class="coxnvyqqt"/><path class="ygttpsbfk"/><path class="cu2r7qb-i"/>`,
		"fallback": "devicon:angularmaterial",
	});
}

export default Component;
