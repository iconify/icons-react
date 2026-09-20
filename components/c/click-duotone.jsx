import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9d5flbcu.css';
import '../../css/f/f2fd4wbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b9d5flbcu"/><path class="f2fd4wbtn"/></g>`,
		"fallback": "si:click-duotone",
	});
}

export default Component;
