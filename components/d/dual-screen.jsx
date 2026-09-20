import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/soqjqnbpb.css';
import '../../css/y/yy8y34gky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="soqjqnbpb"/><path class="yy8y34gky"/></g>`,
		"fallback": "tabler:dual-screen",
	});
}

export default Component;
