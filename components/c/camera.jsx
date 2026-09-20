import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l73erxrfu.css';
import '../../css/r/rgr9lhwva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l73erxrfu"/><path class="rgr9lhwva"/></g>`,
		"fallback": "vadivam:camera",
	});
}

export default Component;
