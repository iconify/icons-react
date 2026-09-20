import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rtj68gb4y.css';
import '../../css/y/ya-qhzbdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rtj68gb4y"/><path class="ya-qhzbdt"/></g>`,
		"fallback": "vadivam:folder-search",
	});
}

export default Component;
