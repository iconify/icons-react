import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xm19agb1f.css';
import '../../css/r/rdmhwy5eu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xm19agb1f"/><path class="rdmhwy5eu"/></g>`,
		"fallback": "glyphs:image-1",
	});
}

export default Component;
