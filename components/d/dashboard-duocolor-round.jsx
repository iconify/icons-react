import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/he51opbeb.css';
import '../../css/b/byhkcgbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="he51opbeb"/><path class="byhkcgbib"/></g>`,
		"fallback": "coolicons:dashboard-duocolor-round",
	});
}

export default Component;
