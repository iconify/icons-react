import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i--wfrrxf.css';
import '../../css/y/yjaje0azm.css';
import '../../css/z/zoakhoblq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i--wfrrxf"/><path class="yjaje0azm"/><path class="zoakhoblq"/></g>`,
		"fallback": "fluent-emoji-flat:cloud-with-snow",
	});
}

export default Component;
