import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f65r0inkw.css';
import '../../css/n/ngsq4lbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f65r0inkw"/><path class="ngsq4lbpd"/></g>`,
		"fallback": "lucide:file-check-corner",
	});
}

export default Component;
