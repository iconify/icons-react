import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q4tjrvbjt.css';
import '../../css/h/hftlwubbp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q4tjrvbjt"/><path class="hftlwubbp"/></g>`,
		"fallback": "glyphs:crown-1-duo",
	});
}

export default Component;
