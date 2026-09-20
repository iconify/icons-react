import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mbjrqb-aq.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/s/s-ho2qb0i.css';
import '../../css/e/e_2bay6_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mbjrqb-aq"/><g class="mc2zb0bvp"><path class="s-ho2qb0i"/><path class="e_2bay6_a"/></g></g>`,
		"fallback": "solar:documents-minimalistic-bold-duotone",
	});
}

export default Component;
