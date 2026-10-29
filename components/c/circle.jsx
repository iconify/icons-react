import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mph5d6z2j.css';
import '../../css/b/bas90cbxo.css';
import '../../css/w/w80_64pdj.css';
import '../../css/w/wy8mnub5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mph5d6z2j wm-k"/><path class="bas90cbxo wm-k"/><path class="w80_64pdj wm-k"/><path class="wm-shine wy8mnub5w"/></g>`,
		"fallback": "withicons-anime:circle",
	});
}

export default Component;
