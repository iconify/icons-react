import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x__2j9b-q.css';
import '../../css/z/z99fyg__u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x__2j9b-q"/><path class="z99fyg__u"/></g>`,
		"fallback": "vadivam:calendar-arrow-left",
	});
}

export default Component;
