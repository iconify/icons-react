import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7rv9fn4u.css';
import '../../css/a/auxv78bvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m7rv9fn4u"/><path class="auxv78bvd"/></g>`,
		"fallback": "coolicons:coffee-to-go-duotone-round",
	});
}

export default Component;
