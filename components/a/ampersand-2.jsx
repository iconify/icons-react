import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l18wyihen.css';
import '../../css/r/rajzm5ujv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="l18wyihen"/><path class="rajzm5ujv"/></g>`,
		"fallback": "glyphs:ampersand-2",
	});
}

export default Component;
