import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijmmrsb-e.css';
import '../../css/n/nefb2ix1e.css';
import '../../css/m/m34a79nzd.css';
import '../../css/o/oxr5sib_p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ijmmrsb-e"/><path class="nefb2ix1e"/><path class="m34a79nzd"/><path class="oxr5sib_p"/></g>`,
		"fallback": "icon-park:abdominal",
	});
}

export default Component;
