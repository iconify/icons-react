import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/etji4rahb.css';
import '../../css/k/kljhgdcqi.css';
import '../../css/u/uc2zedb-c.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="etji4rahb"/><path class="kljhgdcqi"/><path class="uc2zedb-c"/></g>`,
		"fallback": "skill-icons:ansible",
	});
}

export default Component;
