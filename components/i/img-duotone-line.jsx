import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1kfdbb0u.css';
import '../../css/h/h40z4lrmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="q1kfdbb0u"/><path class="h40z4lrmo"/>`,
		"fallback": "lets-icons:img-duotone-line",
	});
}

export default Component;
