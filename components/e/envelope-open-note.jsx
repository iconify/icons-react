import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/azmt7fbec.css';
import '../../css/h/h6i762oyw.css';
import '../../css/s/sq30kocpx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="azmt7fbec"/><path class="h6i762oyw"/><path class="sq30kocpx"/></g>`,
		"fallback": "glyphs:envelope-open-note",
	});
}

export default Component;
