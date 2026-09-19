import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b3zk9cc4a.css';
import '../../css/t/tyk4bm_5n.css';
import '../../css/d/d_jqz1j2x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b3zk9cc4a"/><path class="tyk4bm_5n"/><path class="d_jqz1j2x"/></g>`,
		"fallback": "glyphs:globe-middle",
	});
}

export default Component;
