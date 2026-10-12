import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zef30ob2n.css';
import '../../css/b/baih8hb8v.css';
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
		"content": `<g class="ft5dv1b6b"><path class="zef30ob2n"/><path class="baih8hb8v"/><path class="es97pcacw"/><path class="ucogdbb3g"/></g>`,
		"fallback": "lucide-extended:database-search-duotone",
	});
}

export default Component;
