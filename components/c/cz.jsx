import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygbfe1c7e.css';
import '../../css/s/s_fejtbws.css';
import '../../css/c/cyl4wr67n.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ygbfe1c7e"/><path class="s_fejtbws"/><path class="cyl4wr67n"/></g>`,
		"fallback": "cif:cz",
	});
}

export default Component;
