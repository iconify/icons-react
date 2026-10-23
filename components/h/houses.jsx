import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t9-657byc.css';
import '../../css/s/swh7fbbyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t9-657byc"/><path class="swh7fbbyr"/></g>`,
		"fallback": "vadivam:houses",
	});
}

export default Component;
