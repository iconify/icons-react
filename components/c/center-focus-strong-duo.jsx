import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x08mp2bej.css';
import '../../css/i/isch7z0wf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x08mp2bej"/><path class="isch7z0wf"/></g>`,
		"fallback": "glyphs:center-focus-strong-duo",
	});
}

export default Component;
