import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqlemybcl.css';
import '../../css/t/tjaak3z0c.css';
import '../../css/j/jo5f2oxyf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xqlemybcl"/><path clip-rule="evenodd" class="tjaak3z0c"/><path class="jo5f2oxyf"/></g>`,
		"fallback": "glyphs:bell-ring-bold",
	});
}

export default Component;
