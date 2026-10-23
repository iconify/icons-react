import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/blywtfbia.css';
import '../../css/d/dwv9nnbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="blywtfbia"/><path class="dwv9nnbgz"/></g>`,
		"fallback": "vadivam:funnel",
	});
}

export default Component;
