import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/korua5bqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="korua5bqr"/>`,
		"fallback": "vadivam:align-horizontal-justify-start",
	});
}

export default Component;
