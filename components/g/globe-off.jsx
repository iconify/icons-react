import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nx-h-hbdi.css';
import '../../css/j/jt3syef6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nx-h-hbdi"/><path class="jt3syef6s"/></g>`,
		"fallback": "lucide:globe-off",
	});
}

export default Component;
