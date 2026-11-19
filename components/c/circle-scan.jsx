import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x1kzsmy6e.css';
import '../../css/r/rfhs39bot.css';
import '../../css/y/y9-k5cx_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x1kzsmy6e"/><circle class="rfhs39bot"/><path clip-rule="evenodd" class="y9-k5cx_c"/></g>`,
		"fallback": "andrsrxn:circle-scan",
	});
}

export default Component;
