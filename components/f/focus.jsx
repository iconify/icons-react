import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/drjlh75sk.css';
import '../../css/q/qseti6ejl.css';
import '../../css/v/vdh7qhbbj.css';
import '../../css/j/j1v295b6d.css';
import '../../css/s/sosydyxro.css';
import '../../css/a/avm801z_y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="drjlh75sk"/><path class="qseti6ejl"/><path class="vdh7qhbbj"/><path class="j1v295b6d"/><rect class="sosydyxro"/><circle transform="matrix(-1 0 0 1 24 24)" class="avm801z_y"/></g>`,
		"fallback": "icon-park:focus",
	});
}

export default Component;
