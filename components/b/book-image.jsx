import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lxogbhe7j.css';
import '../../css/i/iwj_2cqwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lxogbhe7j"/><path class="iwj_2cqwu"/></g>`,
		"fallback": "vadivam:book-image",
	});
}

export default Component;
