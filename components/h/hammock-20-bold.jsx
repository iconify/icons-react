import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq1tynbis.css';
import '../../css/s/s0b8obc_s.css';
import '../../css/a/ao1_9pbds.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq1tynbis"/><path class="s0b8obc_s"/><path class="ao1_9pbds"/>`,
		"fallback": "energy-icons:hammock-20-bold",
	});
}

export default Component;
