import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b3zk9cc4a.css';
import '../../css/g/g0iujrblk.css';
import '../../css/t/t-fceks1y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b3zk9cc4a"/><path class="g0iujrblk"/><path class="t-fceks1y"/></g>`,
		"fallback": "glyphs:globe-asia",
	});
}

export default Component;
