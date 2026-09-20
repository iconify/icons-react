import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dr_ae7pfe.css';
import '../../css/q/q_8yrbgax.css';
import '../../css/f/fr_kudi1b.css';

const viewBox = {"width":824,"height":824};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="dr_ae7pfe"/><circle class="q_8yrbgax"/><path clip-rule="evenodd" class="fr_kudi1b"/></g>`,
		"fallback": "thesvg-color:heptabase",
	});
}

export default Component;
