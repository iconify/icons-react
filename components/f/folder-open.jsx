import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q0h-smbqd.css';
import '../../css/l/lkxv1d43v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q0h-smbqd"/><path class="lkxv1d43v"/></g>`,
		"fallback": "glyphs:folder-open",
	});
}

export default Component;
