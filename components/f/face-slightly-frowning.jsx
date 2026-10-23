import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u7ozr2vll.css';
import '../../css/b/bo_rjvhrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u7ozr2vll"/><path class="bo_rjvhrj"/></g>`,
		"fallback": "vadivam:face-slightly-frowning",
	});
}

export default Component;
