import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xjj0gubnd.css';
import '../../css/o/ocuyrac4x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xjj0gubnd"/><path class="ocuyrac4x"/></g>`,
		"fallback": "glyphs:anchor-bold",
	});
}

export default Component;
