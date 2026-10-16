import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/by0d4fbsy.css';
import '../../css/a/ab5v9rscb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="by0d4fbsy"/><path class="ab5v9rscb"/></g>`,
		"fallback": "andrsrxn:film-sound-wave",
	});
}

export default Component;
