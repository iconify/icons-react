import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r8vbx7bdh.css';
import '../../css/f/f66k-abse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r8vbx7bdh"/><path class="f66k-abse"/></g>`,
		"fallback": "tabler:brand-picsart",
	});
}

export default Component;
