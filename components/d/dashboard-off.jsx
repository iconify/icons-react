import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ou-7accxf.css';
import '../../css/w/ww9nj8y8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ou-7accxf"/><path class="ww9nj8y8q"/></g>`,
		"fallback": "tabler:dashboard-off",
	});
}

export default Component;
