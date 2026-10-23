import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pvkfy3b-g.css';
import '../../css/c/cmu8l1j2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pvkfy3b-g"/><path class="cmu8l1j2n"/></g>`,
		"fallback": "vadivam:book-audio",
	});
}

export default Component;
