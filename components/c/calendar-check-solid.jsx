import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/f/fqn-8q5pv.css';
import '../../css/b/bxwx3-8xo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="fqn-8q5pv"/><path class="bxwx3-8xo"/></g>`,
		"fallback": "iconoir:calendar-check-solid",
	});
}

export default Component;
