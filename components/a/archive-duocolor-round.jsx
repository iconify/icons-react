import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/ft1pq8bgo.css';
import '../../css/q/qk4j8ablj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ft1pq8bgo"/><path class="qk4j8ablj"/></g>`,
		"fallback": "coolicons:archive-duocolor-round",
	});
}

export default Component;
