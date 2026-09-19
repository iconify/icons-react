import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lskuoqb9g.css';
import '../../css/c/c5bqli6yp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lskuoqb9g"/><path class="c5bqli6yp"/></g>`,
		"fallback": "glyphs:bell-ring",
	});
}

export default Component;
