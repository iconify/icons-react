import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/obvypy87l.css';
import '../../css/y/y9-e-1ylg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="obvypy87l"/><path class="y9-e-1ylg"/></g>`,
		"fallback": "si:flow-line-duotone",
	});
}

export default Component;
