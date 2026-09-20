import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/izkq64pzl.css';
import '../../css/z/zwph-pesd.css';
import '../../css/o/or0_v3b5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="izkq64pzl"/><rect class="zwph-pesd"/><path class="or0_v3b5l"/></g>`,
		"fallback": "lets-icons:credit-card-duotone-line",
	});
}

export default Component;
