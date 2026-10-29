import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x0dmzccsn.css';
import '../../css/q/qv-1s9z6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x0dmzccsn"/><path class="qv-1s9z6p"/></g>`,
		"fallback": "vadivam:ham",
	});
}

export default Component;
