import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/f/fer1ldbeb.css';
import '../../css/c/c-r_9wbsc.css';
import '../../css/m/mqn03ibrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="fer1ldbeb"/><path class="c-r_9wbsc"/><path class="mqn03ibrr"/></g>`,
		"fallback": "iconoir:graduation-cap-solid",
	});
}

export default Component;
