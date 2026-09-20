import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dcerkhb-h.css';
import '../../css/o/oe17a_jel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dcerkhb-h"/><path class="oe17a_jel"/></g>`,
		"fallback": "lucide:hand",
	});
}

export default Component;
