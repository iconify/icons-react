import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/khsra6f7m.css';
import '../../css/d/dfyd-dbyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="khsra6f7m"/><path class="dfyd-dbyd"/></g>`,
		"fallback": "keyline-icons:git-pull-request-plus-sharp-two-tone",
	});
}

export default Component;
