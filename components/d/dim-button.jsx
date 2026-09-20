import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/larysibsv.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/d/dop23ibmn.css';
import '../../css/t/tkfk-sbea.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="larysibsv"/><g class="ij2x_72vy"><circle class="dop23ibmn"/><path class="tkfk-sbea"/></g>`,
		"fallback": "openmoji:dim-button",
	});
}

export default Component;
