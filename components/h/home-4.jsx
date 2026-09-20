import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cp2252o0t.css';
import '../../css/a/ag6py08zf.css';
import '../../css/a/a37rzcbnm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cp2252o0t"/><path class="ag6py08zf"/><path class="a37rzcbnm"/></g>`,
		"fallback": "streamline-color:home-4",
	});
}

export default Component;
