import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rc_wa302a.css';
import '../../css/y/yhbjiub0q.css';
import '../../css/c/c72m0orqb.css';
import '../../css/c/c7cbc_b8n.css';
import '../../css/z/z_zggnb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rc_wa302a"/><path class="yhbjiub0q"/><path class="c72m0orqb"/><path class="c7cbc_b8n"/><path class="z_zggnb9w"/></g>`,
		"fallback": "solar:dumbbell-large-minimalistic-line-duotone",
	});
}

export default Component;
