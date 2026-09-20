import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u143jdbtc.css';
import '../../css/b/b1-ka356e.css';
import '../../css/e/ewifwtbgj.css';
import '../../css/m/m-gxz2bed.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u143jdbtc"/><path class="b1-ka356e"/><path class="ewifwtbgj"/><path class="m-gxz2bed"/></g>`,
		"fallback": "streamline-color:galaxy-2",
	});
}

export default Component;
