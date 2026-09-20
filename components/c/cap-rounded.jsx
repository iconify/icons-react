import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x3hq8db9d.css';
import '../../css/k/kjtwc380d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x3hq8db9d"/><path class="kjtwc380d"/></g>`,
		"fallback": "tabler:cap-rounded",
	});
}

export default Component;
