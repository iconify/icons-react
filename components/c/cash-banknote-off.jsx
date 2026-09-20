import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vofooj_ct.css';
import '../../css/j/js9spn1lw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vofooj_ct"/><path class="js9spn1lw"/></g>`,
		"fallback": "tabler:cash-banknote-off",
	});
}

export default Component;
