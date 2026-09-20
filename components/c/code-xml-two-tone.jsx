import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sfbfre4oy.css';
import '../../css/n/nm76pbt0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sfbfre4oy"/><path class="nm76pbt0e"/></g>`,
		"fallback": "keyline-icons:code-xml-two-tone",
	});
}

export default Component;
