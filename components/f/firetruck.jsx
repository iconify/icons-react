import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i9rz4zb0i.css';
import '../../css/e/ev-9ptzbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i9rz4zb0i"/><path class="ev-9ptzbu"/></g>`,
		"fallback": "tabler:firetruck",
	});
}

export default Component;
