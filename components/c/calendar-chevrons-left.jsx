import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c82o5ynbu.css';
import '../../css/a/anw2c1jrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c82o5ynbu"/><path class="anw2c1jrb"/></g>`,
		"fallback": "lucide:calendar-chevrons-left",
	});
}

export default Component;
