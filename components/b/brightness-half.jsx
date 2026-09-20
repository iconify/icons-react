import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/renm_uawv.css';
import '../../css/d/dba5qkt6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="renm_uawv"/><path class="dba5qkt6i"/></g>`,
		"fallback": "tabler:brightness-half",
	});
}

export default Component;
