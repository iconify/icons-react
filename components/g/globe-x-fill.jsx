import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gcrhrmmun.css';
import '../../css/u/ug-17ffme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gcrhrmmun"/><path class="ug-17ffme"/></g>`,
		"fallback": "keyline-icons:globe-x-fill",
	});
}

export default Component;
