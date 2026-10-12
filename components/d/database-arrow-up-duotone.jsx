import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oz2v4-j_u.css';
import '../../css/c/cjq0ppbzf.css';
import '../../css/e/es97pcacw.css';
import '../../css/u/ucogdbb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oz2v4-j_u"/><path class="cjq0ppbzf"/><path class="es97pcacw"/><path class="ucogdbb3g"/></g>`,
		"fallback": "lucide-extended:database-arrow-up-duotone",
	});
}

export default Component;
