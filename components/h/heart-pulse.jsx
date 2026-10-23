import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o5kpsac4o.css';
import '../../css/a/a2x2nj56g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o5kpsac4o"/><path class="a2x2nj56g"/></g>`,
		"fallback": "vadivam:heart-pulse",
	});
}

export default Component;
