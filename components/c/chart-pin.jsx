import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lwnrebcsd.css';
import '../../css/q/q1se71oae.css';
import '../../css/g/galbvhezo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lwnrebcsd"/><path class="q1se71oae"/><circle class="galbvhezo"/></g>`,
		"fallback": "lets-icons:chart-pin",
	});
}

export default Component;
