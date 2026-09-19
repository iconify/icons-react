import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n3l4e4b7o.css';
import '../../css/v/v16tefbjf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n3l4e4b7o"/><path class="v16tefbjf"/></g>`,
		"fallback": "glyphs:arrow-square",
	});
}

export default Component;
