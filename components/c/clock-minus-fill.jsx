import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lf8uiic0i.css';
import '../../css/v/v_n61vb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="lf8uiic0i"/><path class="v_n61vb4y"/></g>`,
		"fallback": "keyline-icons:clock-minus-fill",
	});
}

export default Component;
