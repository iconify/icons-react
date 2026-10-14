import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/m6mbryb_c.css';
import '../../css/b/bbl26u-tv.css';
import '../../css/e/e_fbcwf2i.css';
import '../../css/m/m49qz1b7l.css';
import '../../css/n/nhzj3ja0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="m6mbryb_c"/><path class="bbl26u-tv"/><path class="e_fbcwf2i"/><path class="m49qz1b7l"/><path class="nhzj3ja0p"/></g>`,
		"fallback": "matita:git-merge",
	});
}

export default Component;
