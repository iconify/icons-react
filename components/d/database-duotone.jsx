import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmljnbb4u.css';
import '../../css/l/l6inxqm2l.css';
import '../../css/c/cbanfebus.css';
import '../../css/i/iubkpvb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qmljnbb4u"/><ellipse class="l6inxqm2l"/><path class="cbanfebus"/><path class="iubkpvb5h"/></g>`,
		"fallback": "lets-icons:database-duotone",
	});
}

export default Component;
