import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxm8p3i5b.css';
import '../../css/u/u-rm4cb6g.css';
import '../../css/j/jq8_tltkz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vxm8p3i5b"/><path class="u-rm4cb6g"/><path class="jq8_tltkz"/></g>`,
		"fallback": "streamline-color:hotel-two-star",
	});
}

export default Component;
