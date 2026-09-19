import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b3zk9cc4a.css';
import '../../css/y/y4c_rr2iz.css';
import '../../css/p/pc-r86b-i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b3zk9cc4a"/><path class="y4c_rr2iz"/><path class="pc-r86b-i"/></g>`,
		"fallback": "glyphs:globe-europe",
	});
}

export default Component;
