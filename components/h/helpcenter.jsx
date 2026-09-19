import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/ssl06vogh.css';
import '../../css/o/odgt6qb4r.css';
import '../../css/f/fi821nc1v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ssl06vogh"/><path class="odgt6qb4r"/><path clip-rule="evenodd" class="fi821nc1v"/></g>`,
		"fallback": "icon-park-outline:helpcenter",
	});
}

export default Component;
