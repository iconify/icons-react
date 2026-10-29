import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sw6vdtb6r.css';
import '../../css/d/dkl9z8v5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sw6vdtb6r"/><path class="dkl9z8v5b"/></g>`,
		"fallback": "withicons-bauhaus:bamboo",
	});
}

export default Component;
