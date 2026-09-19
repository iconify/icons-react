import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tvn-xmbrs.css';
import '../../css/j/j5zpunbjb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tvn-xmbrs"/><path class="j5zpunbjb"/></g>`,
		"fallback": "glyphs:elevator",
	});
}

export default Component;
