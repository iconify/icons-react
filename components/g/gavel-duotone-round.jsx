import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t83ikacbg.css';
import '../../css/s/sy3t2or1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t83ikacbg"/><path class="sy3t2or1f"/></g>`,
		"fallback": "coolicons:gavel-duotone-round",
	});
}

export default Component;
