import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/prztxk67h.css';
import '../../css/s/st0k6jbed.css';
import '../../css/y/y-a0iibgi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="prztxk67h"/><path class="st0k6jbed"/><path class="y-a0iibgi"/></g>`,
		"fallback": "glyphs:album-collection",
	});
}

export default Component;
