import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r0vgt4upi.css';
import '../../css/o/ot8yzyb7e.css';
import '../../css/p/ptvu1u_4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r0vgt4upi"/><path class="ot8yzyb7e"/><circle class="ptvu1u_4n"/></g>`,
		"fallback": "lucide:book-user",
	});
}

export default Component;
