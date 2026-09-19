import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pn48gtbgw.css';
import '../../css/f/f-n8rxkai.css';
import '../../css/e/e6kbp_ktm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="pn48gtbgw"/><path class="f-n8rxkai"/><circle class="e6kbp_ktm"/></g>`,
		"fallback": "akar-icons:cut",
	});
}

export default Component;
