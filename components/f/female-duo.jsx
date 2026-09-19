import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r2rsyzbuj.css';
import '../../css/u/uia4m5exp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r2rsyzbuj"/><path class="uia4m5exp"/></g>`,
		"fallback": "glyphs:female-duo",
	});
}

export default Component;
