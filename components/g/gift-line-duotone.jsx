import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e9bgwyb-s.css';
import '../../css/e/e7rtyhbdt.css';
import '../../css/o/o6zz0vbkl.css';
import '../../css/m/mzn_blbqr.css';
import '../../css/d/dadlzrowr.css';
import '../../css/r/raokm3b8s.css';
import '../../css/x/xvjk-cbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e9bgwyb-s"/><path class="e7rtyhbdt"/><path class="o6zz0vbkl"/><path class="mzn_blbqr"/><path class="dadlzrowr"/><path class="raokm3b8s"/><path class="xvjk-cbox"/></g>`,
		"fallback": "solar:gift-line-duotone",
	});
}

export default Component;
