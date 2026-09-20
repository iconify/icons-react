import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/llbqq6_8d.css';
import '../../css/v/v6y39vytb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="llbqq6_8d"/><path class="v6y39vytb"/></g>`,
		"fallback": "majesticons:chromecast-line",
	});
}

export default Component;
