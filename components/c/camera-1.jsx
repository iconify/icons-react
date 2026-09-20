import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t2913mrlt.css';
import '../../css/g/g0f9vvt3n.css';
import '../../css/j/j9wvwgbzu.css';
import '../../css/s/s338fsbeu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t2913mrlt"/><path class="g0f9vvt3n"/><path class="j9wvwgbzu"/><path class="s338fsbeu"/></g>`,
		"fallback": "streamline-flex-color:camera-1",
	});
}

export default Component;
