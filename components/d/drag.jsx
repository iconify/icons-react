import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g9ec-ub-g.css';
import '../../css/g/gp4cu5h2r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="g9ec-ub-g"/><path class="gp4cu5h2r"/></g>`,
		"fallback": "icon-park:drag",
	});
}

export default Component;
