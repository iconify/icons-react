import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jpkzvpb9n.css';
import '../../css/c/cfaelwp8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jpkzvpb9n"/><path class="cfaelwp8o"/></g>`,
		"fallback": "lucide:figma",
	});
}

export default Component;
