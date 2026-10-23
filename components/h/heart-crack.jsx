import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o5kpsac4o.css';
import '../../css/x/x2wji8bcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o5kpsac4o"/><path class="x2wji8bcr"/></g>`,
		"fallback": "vadivam:heart-crack",
	});
}

export default Component;
