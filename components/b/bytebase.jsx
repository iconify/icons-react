import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6y8f8bcv.css';
import '../../css/r/rk0e0ccfm.css';
import '../../css/c/cewph5ymu.css';

const viewBox = {"width":160,"height":160};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k6y8f8bcv"/><path class="rk0e0ccfm"/><path class="cewph5ymu"/></g>`,
		"fallback": "thesvg-color:bytebase",
	});
}

export default Component;
