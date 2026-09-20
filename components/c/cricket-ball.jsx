import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qu0emtbbx.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/e/e8abpcfvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qu0emtbbx"/><circle class="shu3xdl9q"/><path class="e8abpcfvd"/></g>`,
		"fallback": "lucide-lab:cricket-ball",
	});
}

export default Component;
