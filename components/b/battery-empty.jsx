import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/obsjfkxrf.css';
import '../../css/a/ak16ri65q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="obsjfkxrf"/><path class="ak16ri65q"/></g>`,
		"fallback": "akar-icons:battery-empty",
	});
}

export default Component;
