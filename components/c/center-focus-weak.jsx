import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/abfn7falh.css';
import '../../css/y/yojarusnn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="abfn7falh"/><rect class="yojarusnn"/></g>`,
		"fallback": "glyphs-poly:center-focus-weak",
	});
}

export default Component;
