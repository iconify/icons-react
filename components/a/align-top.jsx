import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4dneib8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4dneib8k"/>`,
		"fallback": "ri:align-top",
	});
}

export default Component;
