import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-5d4g10n.css';
import '../../css/l/ln7b4tb0c.css';
import '../../css/d/dwucxovzu.css';
import '../../css/y/yk7ngobex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 12 4.58)" class="r-5d4g10n"/><path class="ln7b4tb0c"/><circle transform="rotate(90 12 4.58)" class="dwucxovzu"/><path class="yk7ngobex"/></g>`,
		"fallback": "andrsrxn:accessibility-check",
	});
}

export default Component;
