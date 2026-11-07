import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jckd39bek.css';
import '../../css/c/cioc0-bqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jckd39bek"/><path class="cioc0-bqm"/></g>`,
		"fallback": "solar:bag-3-linear",
	});
}

export default Component;
