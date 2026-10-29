import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nfsajtnmw.css';
import '../../css/j/js7dzdb1b.css';
import '../../css/f/fomxu2b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nfsajtnmw"/><path class="js7dzdb1b"/><path class="fomxu2b-v"/></g>`,
		"fallback": "withicons-bauhaus:clipboard-x",
	});
}

export default Component;
