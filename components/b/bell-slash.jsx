import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l3e0zwbow.css';
import '../../css/p/pcna707ht.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="l3e0zwbow"/><path class="pcna707ht"/></g>`,
		"fallback": "glyphs:bell-slash",
	});
}

export default Component;
