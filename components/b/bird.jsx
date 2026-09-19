import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n05hqxboa.css';
import '../../css/x/xwe23ta8r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n05hqxboa"/><circle class="xwe23ta8r"/></g>`,
		"fallback": "icon-park:bird",
	});
}

export default Component;
