import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zmzh9qo7m.css';
import '../../css/w/w8j546l7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zmzh9qo7m"/><path class="w8j546l7a"/></g>`,
		"fallback": "feather:check-circle",
	});
}

export default Component;
