import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnb90nbxf.css';
import '../../css/j/j8nkcq8nt.css';
import '../../css/y/y7jx548qp.css';
import '../../css/k/kwcn3zb7c.css';
import '../../css/j/j0-ydacal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnb90nbxf"/><path class="j8nkcq8nt"/><path class="y7jx548qp"/><path class="kwcn3zb7c"/><path clip-rule="evenodd" class="j0-ydacal"/>`,
		"fallback": "solar:bluetooth-circle-bold-duotone",
	});
}

export default Component;
