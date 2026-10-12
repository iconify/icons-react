import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iy8rxybve.css';
import '../../css/k/keof4xzec.css';
import '../../css/y/y9r4so1un.css';
import '../../css/e/e37fgvsvu.css';
import '../../css/c/c1ldmobjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iy8rxybve"/><path class="keof4xzec"/><path class="y9r4so1un"/><path class="e37fgvsvu"/><path class="c1ldmobjz"/></g>`,
		"fallback": "andrsrxn:cap",
	});
}

export default Component;
