import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b3nn9hb_w.css';
import '../../css/c/cqucpsc0h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b3nn9hb_w"/><path class="cqucpsc0h"/></g>`,
		"fallback": "glyphs:font",
	});
}

export default Component;
