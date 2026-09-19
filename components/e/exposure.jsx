import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v-_n44b3k.css';
import '../../css/l/lssfhfaij.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="v-_n44b3k"/><path class="lssfhfaij"/></g>`,
		"fallback": "glyphs:exposure",
	});
}

export default Component;
