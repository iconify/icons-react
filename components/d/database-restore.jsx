import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mwz9-fkga.css';
import '../../css/e/e6oe62cde.css';
import '../../css/b/bthouvbra.css';
import '../../css/j/jlxgqlbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><ellipse class="mwz9-fkga"/><path class="e6oe62cde"/><path class="bthouvbra"/><path class="jlxgqlbic"/></g>`,
		"fallback": "hugeicons:database-restore",
	});
}

export default Component;
