import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o33x41uvf.css';
import '../../css/k/ka78z0bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o33x41uvf"/><path class="ka78z0bui"/></g>`,
		"fallback": "si:heart-duotone",
	});
}

export default Component;
