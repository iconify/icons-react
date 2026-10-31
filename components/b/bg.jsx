import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wt-a7wbqk.css';
import '../../css/o/o85o14brb.css';
import '../../css/n/n4rvk3jeo.css';

const viewBox = {"width":301,"height":181};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wt-a7wbqk"/><path class="o85o14brb"/><path class="n4rvk3jeo"/></g>`,
		"fallback": "cif:bg",
	});
}

export default Component;
