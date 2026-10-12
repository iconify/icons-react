import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5knpcbeg.css';
import '../../css/r/rqr606bgh.css';
import '../../css/t/t3muc1b1j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5knpcbeg"/><path class="rqr606bgh"/><path class="t3muc1b1j"/>`,
		"fallback": "garden:clock-cycle-fill-20",
	});
}

export default Component;
