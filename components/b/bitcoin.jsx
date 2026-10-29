import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e3hfdmyvm.css';
import '../../css/e/e53dr11tv.css';
import '../../css/b/bqrd_rbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="e3hfdmyvm"/><path class="e53dr11tv"/><path class="bqrd_rbvj"/></g>`,
		"fallback": "withicons-bauhaus:bitcoin",
	});
}

export default Component;
