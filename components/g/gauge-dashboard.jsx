import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d0klo_bml.css';
import '../../css/u/u5nca1byu.css';
import '../../css/d/d2jjo4bby.css';
import '../../css/e/ebwe9bcat.css';
import '../../css/r/rgx4z2blv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d0klo_bml"/><path class="u5nca1byu"/><path class="d2jjo4bby"/><path class="ebwe9bcat"/><path class="rgx4z2blv"/></g>`,
		"fallback": "streamline-ultimate-color:gauge-dashboard",
	});
}

export default Component;
