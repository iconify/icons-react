import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ep902kdbw.css';
import '../../css/d/ddo7xcccw.css';
import '../../css/q/qjjcpxbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ep902kdbw"/><path class="ddo7xcccw"/><path class="qjjcpxbcq"/></g>`,
		"fallback": "lucide-extended:hiking-stick-duotone",
	});
}

export default Component;
