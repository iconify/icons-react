import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gx2bnqncx.css';
import '../../css/b/bg0e3kb9w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gx2bnqncx"/><path class="bg0e3kb9w"/></g>`,
		"fallback": "glyphs:align-justify-outline",
	});
}

export default Component;
