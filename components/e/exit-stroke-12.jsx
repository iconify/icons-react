import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmdbu6bzk.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmdbu6bzk"/>`,
		"fallback": "garden:exit-stroke-12",
	});
}

export default Component;
