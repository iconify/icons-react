import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifvazgbwe.css';
import '../../css/t/tht37pbqq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ifvazgbwe"/><path class="tht37pbqq"/></g>`,
		"fallback": "glyphs-poly:font",
	});
}

export default Component;
