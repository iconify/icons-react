import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d49y3rbaj.css';
import '../../css/j/j3bh-lbvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d49y3rbaj"/><path class="j3bh-lbvm"/></g>`,
		"fallback": "vadivam:fast-forward",
	});
}

export default Component;
