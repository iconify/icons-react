import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9v02fbgd.css';
import '../../css/y/yx0j45kpy.css';
import '../../css/f/f-z2sbqxv.css';
import '../../css/a/aq8evbufr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k9v02fbgd"/><path class="yx0j45kpy"/><circle class="f-z2sbqxv"/><path class="aq8evbufr"/></g>`,
		"fallback": "lets-icons:flask-alt-light",
	});
}

export default Component;
