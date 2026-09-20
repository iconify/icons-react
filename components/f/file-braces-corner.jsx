import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mhfayk9ia.css';
import '../../css/o/olnu6wxmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mhfayk9ia"/><path class="olnu6wxmv"/></g>`,
		"fallback": "lucide:file-braces-corner",
	});
}

export default Component;
