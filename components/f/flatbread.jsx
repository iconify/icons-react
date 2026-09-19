import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/raevc0bpo.css';
import '../../css/j/jc63e-bpx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="raevc0bpo"/><path class="jc63e-bpx"/></g>`,
		"fallback": "fluent-emoji-flat:flatbread",
	});
}

export default Component;
