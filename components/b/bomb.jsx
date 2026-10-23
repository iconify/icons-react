import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jj9tnrb1q.css';
import '../../css/b/bx83nsb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jj9tnrb1q"/><path class="bx83nsb4t"/></g>`,
		"fallback": "vadivam:bomb",
	});
}

export default Component;
