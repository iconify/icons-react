import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g523tnbmt.css';
import '../../css/p/pu_fefumf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g523tnbmt"/><path class="pu_fefumf"/></g>`,
		"fallback": "tdesign:combination",
	});
}

export default Component;
