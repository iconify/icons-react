import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mp7cqf5pg.css';
import '../../css/t/tzd-n9efz.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mp7cqf5pg"/><path clip-rule="evenodd" class="tzd-n9efz"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:flag-straight-off",
	});
}

export default Component;
