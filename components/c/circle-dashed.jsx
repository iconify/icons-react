import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/eup7q5r0k.css';
import '../../css/s/swzvg8b8g.css';
import '../../css/m/mf08bkvgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="eup7q5r0k wm-shadow"/><path class="swzvg8b8g wm-shadow"/><path class="mf08bkvgy"/></g>`,
		"fallback": "withicons-brutal:circle-dashed",
	});
}

export default Component;
