import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/edpk30g7y.css';
import '../../css/l/l-ze-_87n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="edpk30g7y"/><path clip-rule="evenodd" class="l-ze-_87n"/></g>`,
		"fallback": "streamline-flex-color:ear-speciality-flat",
	});
}

export default Component;
