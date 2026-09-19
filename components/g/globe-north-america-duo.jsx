import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk2uwtblc.css';
import '../../css/u/u9gxspzkf.css';
import '../../css/c/cq0hx26ww.css';
import '../../css/f/fz1n9lbbo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vk2uwtblc"/><path class="u9gxspzkf"/><path class="cq0hx26ww"/><path class="fz1n9lbbo"/></g>`,
		"fallback": "glyphs:globe-north-america-duo",
	});
}

export default Component;
