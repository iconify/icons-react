import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d6y4l4bhk.css';
import '../../css/f/fgtkjnb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d6y4l4bhk"/><path class="fgtkjnb2b"/></g>`,
		"fallback": "tdesign:dam-2",
	});
}

export default Component;
