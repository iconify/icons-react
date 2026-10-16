import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mda9u4_io.css';
import '../../css/v/vuvq3lhqi.css';
import '../../css/a/a3zk-ac1v.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mda9u4_io"/><path class="vuvq3lhqi"/><circle class="a3zk-ac1v"/></g>`,
		"fallback": "thesvg-color:autobrr",
	});
}

export default Component;
