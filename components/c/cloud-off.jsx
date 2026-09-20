import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/e/ehr6z7bxk.css';
import '../../css/x/x5v2izb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ehr6z7bxk"/><path class="x5v2izb2y"/></g>`,
		"fallback": "streamline-sharp-color:cloud-off",
	});
}

export default Component;
