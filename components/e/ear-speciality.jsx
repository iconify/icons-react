import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1fhmbcqd.css';
import '../../css/k/kem5pbbxd.css';
import '../../css/y/yl07m5ber.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b1fhmbcqd"/><path class="kem5pbbxd"/><path class="yl07m5ber"/></g>`,
		"fallback": "streamline-flex-color:ear-speciality",
	});
}

export default Component;
