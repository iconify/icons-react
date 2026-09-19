import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmx2n3bsv.css';
import '../../css/k/k0e30mbrr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmx2n3bsv"/><path class="k0e30mbrr"/>`,
		"fallback": "cil:exit-to-app",
	});
}

export default Component;
