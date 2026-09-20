import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uowju7b0j.css';
import '../../css/k/kdu1anxjb.css';
import '../../css/q/q7p8ge37d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uowju7b0j"/><path class="kdu1anxjb"/><path class="q7p8ge37d"/></g>`,
		"fallback": "reicon:file-error-duotone",
	});
}

export default Component;
