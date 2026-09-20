import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uaz-e1cnt.css';
import '../../css/y/yy0nyndig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uaz-e1cnt"/><path class="yy0nyndig"/></g>`,
		"fallback": "tabler:arrow-wave-right-down",
	});
}

export default Component;
