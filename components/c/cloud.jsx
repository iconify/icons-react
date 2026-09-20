import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gdasydbld.css';
import '../../css/n/n9e-g889k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gdasydbld"/><path class="n9e-g889k"/></g>`,
		"fallback": "tdesign:cloud",
	});
}

export default Component;
