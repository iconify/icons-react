import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asm-7qbsk.css';
import '../../css/h/hl_9gq79s.css';
import '../../css/j/js9boidqq.css';
import '../../css/q/qm671n1cy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asm-7qbsk"/><ellipse class="hl_9gq79s"/><path class="js9boidqq"/><path class="qm671n1cy"/>`,
		"fallback": "fxemoji:flaginhole",
	});
}

export default Component;
