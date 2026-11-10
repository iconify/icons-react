import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uswxambah.css';
import '../../css/r/rpk1-uufe.css';
import '../../css/s/s7e6cccuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uswxambah"/><path class="rpk1-uufe"/><path class="s7e6cccuy"/></g>`,
		"fallback": "andrsrxn:aspect-ratio",
	});
}

export default Component;
