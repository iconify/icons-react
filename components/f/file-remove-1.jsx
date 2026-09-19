import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ueln8bb9d.css';
import '../../css/j/jvkbjcbed.css';
import '../../css/m/mh2-wxb1h.css';
import '../../css/x/x9240i44s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ueln8bb9d"/><path class="jvkbjcbed"/><path class="mh2-wxb1h"/><path class="x9240i44s"/></g>`,
		"fallback": "glyphs-poly:file-remove-1",
	});
}

export default Component;
