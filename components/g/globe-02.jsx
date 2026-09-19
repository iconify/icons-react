import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/s/sk8l7szjm.css';
import '../../css/r/rw-90qalm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="shu3xdl9q"/><path class="sk8l7szjm"/><path class="rw-90qalm"/></g>`,
		"fallback": "hugeicons:globe-02",
	});
}

export default Component;
