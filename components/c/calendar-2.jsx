import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bmynvddub.css';
import '../../css/p/pec-oacye.css';
import '../../css/u/uc2g8vpel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bmynvddub"/><path class="pec-oacye"/><path class="uc2g8vpel"/></g>`,
		"fallback": "tdesign:calendar-2",
	});
}

export default Component;
