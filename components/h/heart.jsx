import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hy9qbk-_e.css';
import '../../css/m/mqp99_ssi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hy9qbk-_e"/><path class="mqp99_ssi"/></g>`,
		"fallback": "streamline-flex-color:heart",
	});
}

export default Component;
