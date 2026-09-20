import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fxh9si78b.css';
import '../../css/g/gsd44ybeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fxh9si78b"/><path class="gsd44ybeg"/></g>`,
		"fallback": "lets-icons:form-duotone",
	});
}

export default Component;
