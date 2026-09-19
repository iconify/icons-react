import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m05_vsbjb.css';
import '../../css/e/em2pzqy8n.css';
import '../../css/c/cgoh2k0px.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m05_vsbjb"/><path class="em2pzqy8n"/><path clip-rule="evenodd" class="cgoh2k0px"/></g>`,
		"fallback": "glyphs:gift-1-bold",
	});
}

export default Component;
