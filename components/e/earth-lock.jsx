import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jp1uijqea.css';
import '../../css/l/leosdsb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jp1uijqea"/><path class="leosdsb-w"/></g>`,
		"fallback": "vadivam:earth-lock",
	});
}

export default Component;
