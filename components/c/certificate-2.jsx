import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tnxftvb0y.css';
import '../../css/r/r_a360ylm.css';
import '../../css/y/ywghp73jr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tnxftvb0y"/><path class="r_a360ylm"/><path class="ywghp73jr"/></g>`,
		"fallback": "tabler:certificate-2",
	});
}

export default Component;
