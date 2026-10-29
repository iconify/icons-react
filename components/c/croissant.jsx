import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sxi9a9bno.css';
import '../../css/p/pfxiw2bkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sxi9a9bno"/><path class="pfxiw2bkq"/></g>`,
		"fallback": "withicons-bauhaus:croissant",
	});
}

export default Component;
