import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lep9zokjs.css';
import '../../css/j/j61r-5cyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lep9zokjs"/><path class="j61r-5cyt"/></g>`,
		"fallback": "keyline-icons:grid-squares-two-tone",
	});
}

export default Component;
