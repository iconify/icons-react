import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gul0ugb6t.css';
import '../../css/z/zl5m2e4xn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gul0ugb6t"/><path class="zl5m2e4xn"/></g>`,
		"fallback": "coolicons:heart-off-duotone-round",
	});
}

export default Component;
