import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4qy1kbsn.css';
import '../../css/w/wu955sa-e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k4qy1kbsn"/><path class="wu955sa-e"/></g>`,
		"fallback": "glyphs:hand-holding-dollar-duo",
	});
}

export default Component;
