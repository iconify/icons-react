import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjix0jbhi.css';
import '../../css/g/gr8ocxbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rjix0jbhi"/><path class="gr8ocxbkl"/></g>`,
		"fallback": "tdesign:city-3",
	});
}

export default Component;
