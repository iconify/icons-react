import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/a/armwibczr.css';
import '../../css/c/cql1pwtbp.css';
import '../../css/d/d7tp_59on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="shu3xdl9q"/><path class="armwibczr"/><circle class="cql1pwtbp"/><path class="d7tp_59on"/></g>`,
		"fallback": "hugeicons:gauge",
	});
}

export default Component;
