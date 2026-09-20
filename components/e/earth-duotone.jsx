import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/doy9q4b5f.css';
import '../../css/q/qm5412b5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="doy9q4b5f"/><path class="qm5412b5w"/></g>`,
		"fallback": "reicon:earth-duotone",
	});
}

export default Component;
