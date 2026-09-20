import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x0-fphdzi.css';
import '../../css/k/k2ce7c_3l.css';
import '../../css/i/izpkg-04l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x0-fphdzi"/><path class="k2ce7c_3l"/><path class="izpkg-04l"/></g>`,
		"fallback": "tdesign:hourglass",
	});
}

export default Component;
