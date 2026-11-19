import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ej9m1bu1q.css';
import '../../css/q/qwy_xqbmo.css';
import '../../css/s/s3uw6_nib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ej9m1bu1q"/><path class="qwy_xqbmo"/><path class="s3uw6_nib"/></g>`,
		"fallback": "andrsrxn:downscale-image",
	});
}

export default Component;
