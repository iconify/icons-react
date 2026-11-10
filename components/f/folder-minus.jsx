import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/osav7hu5r.css';
import '../../css/y/yq58yxbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="osav7hu5r"/><path class="yq58yxbgd"/></g>`,
		"fallback": "andrsrxn:folder-minus",
	});
}

export default Component;
