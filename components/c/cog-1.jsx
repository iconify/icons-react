import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/heq9a6n7o.css';
import '../../css/g/g1s1oxbjc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="heq9a6n7o"/><path class="g1s1oxbjc"/></g>`,
		"fallback": "glyphs:cog-1",
	});
}

export default Component;
