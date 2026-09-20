import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xuc8vzc5h.css';
import '../../css/p/pf39bxbph.css';
import '../../css/q/qf-g4ac9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xuc8vzc5h"/><path class="pf39bxbph"/><path class="qf-g4ac9i"/></g>`,
		"fallback": "si:credit-card-detailed-alt-duotone",
	});
}

export default Component;
