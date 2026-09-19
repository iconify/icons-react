import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mly5xhppp.css';
import '../../css/w/whpp565sb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mly5xhppp"/><path class="whpp565sb"/></g>`,
		"fallback": "glyphs:image",
	});
}

export default Component;
