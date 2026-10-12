import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fnbulzbgf.css';
import '../../css/h/h6p0s-cgn.css';
import '../../css/l/lm4aoixkf.css';
import '../../css/h/h57xy7bzd.css';
import '../../css/v/v_ukngpfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fnbulzbgf"/><circle transform="rotate(90 12.04 5.91)" class="h6p0s-cgn"/><circle transform="rotate(90 12.04 18)" class="lm4aoixkf"/><circle transform="rotate(90 12.04 5.91)" class="h57xy7bzd"/><circle transform="rotate(90 12.04 18)" class="v_ukngpfa"/></g>`,
		"fallback": "andrsrxn:divide",
	});
}

export default Component;
