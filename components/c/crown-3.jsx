import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m6dnzs4dm.css';
import '../../css/x/xzg6j1bpl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="m6dnzs4dm"/><path class="xzg6j1bpl"/></g>`,
		"fallback": "glyphs:crown-3",
	});
}

export default Component;
