import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gqpzczt0b.css';
import '../../css/e/et_ymoblb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gqpzczt0b"/><path class="et_ymoblb"/></g>`,
		"fallback": "glyphs:envelope",
	});
}

export default Component;
