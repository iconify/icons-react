import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k2iakp5mj.css';
import '../../css/o/oqh2iv9dj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k2iakp5mj"/><path class="oqh2iv9dj"/></g>`,
		"fallback": "vadivam:book-check",
	});
}

export default Component;
