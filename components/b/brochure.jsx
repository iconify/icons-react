import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fqp4acb6t.css';
import '../../css/u/u49h73p9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fqp4acb6t"/><path class="u49h73p9g"/></g>`,
		"fallback": "hugeicons:brochure",
	});
}

export default Component;
