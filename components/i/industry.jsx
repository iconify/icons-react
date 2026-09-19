import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jkfq3bbtl.css';
import '../../css/j/jhgkbffci.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jkfq3bbtl"/><path class="jhgkbffci"/></g>`,
		"fallback": "glyphs:industry",
	});
}

export default Component;
