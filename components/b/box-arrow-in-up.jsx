import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nxega0mee.css';
import '../../css/f/fgrm5wbat.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nxega0mee"/><path class="fgrm5wbat"/></g>`,
		"fallback": "bi:box-arrow-in-up",
	});
}

export default Component;
