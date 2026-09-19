import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rurotwblm.css';
import '../../css/w/w59hr4b9z.css';
import '../../css/f/f4c56ub5v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rurotwblm"/><path class="w59hr4b9z"/><path class="f4c56ub5v"/></g>`,
		"fallback": "glyphs:bus-duo",
	});
}

export default Component;
