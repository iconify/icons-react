import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y7ngan3je.css';
import '../../css/z/zw1hth_za.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="y7ngan3je"/><path class="zw1hth_za"/></g>`,
		"fallback": "glyphs:accessible",
	});
}

export default Component;
