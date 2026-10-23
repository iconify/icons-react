import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/egexid49i.css';
import '../../css/w/w8iy_tbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="egexid49i"/><path class="w8iy_tbhu"/></g>`,
		"fallback": "vadivam:church",
	});
}

export default Component;
