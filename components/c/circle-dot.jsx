import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u7ozr2vll.css';
import '../../css/p/ppdzzsb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u7ozr2vll"/><path class="ppdzzsb6b"/></g>`,
		"fallback": "vadivam:circle-dot",
	});
}

export default Component;
