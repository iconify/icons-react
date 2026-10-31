import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e08jvybqs.css';
import '../../css/r/r_hrz0aji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e08jvybqs"/><path class="r_hrz0aji"/></g>`,
		"fallback": "coolicons:git-compare-duotone-round",
	});
}

export default Component;
