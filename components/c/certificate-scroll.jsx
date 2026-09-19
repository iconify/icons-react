import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kfsyyqb1n.css';
import '../../css/q/q2doak16w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kfsyyqb1n"/><path class="q2doak16w"/></g>`,
		"fallback": "glyphs:certificate-scroll",
	});
}

export default Component;
