import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rq4j_kx8n.css';
import '../../css/y/yx1cocbxe.css';
import '../../css/y/y2e4jbb1z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rq4j_kx8n"/><path class="yx1cocbxe"/><path class="y2e4jbb1z"/></g>`,
		"fallback": "glyphs:folder-open-duo",
	});
}

export default Component;
