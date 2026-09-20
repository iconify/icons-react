import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dee58dbgi.css';
import '../../css/o/o89k-3d4n.css';
import '../../css/c/c6069abgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dee58dbgi"/><path class="o89k-3d4n"/><path class="c6069abgm"/></g>`,
		"fallback": "tdesign:file-edit",
	});
}

export default Component;
