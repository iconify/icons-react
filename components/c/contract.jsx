import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m9ryynb4c.css';
import '../../css/f/fmn04bicb.css';
import '../../css/g/gjxjpib_z.css';
import '../../css/i/i30jjrboj.css';
import '../../css/j/j0ximubwp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m9ryynb4c"/><path class="fmn04bicb"/><path class="gjxjpib_z"/><path class="i30jjrboj"/><path class="j0ximubwp"/></g>`,
		"fallback": "pepicons-pencil:contract",
	});
}

export default Component;
