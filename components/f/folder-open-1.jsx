import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q0h-smbqd.css';
import '../../css/a/a9vqcdbes.css';
import '../../css/z/zpu_ag60e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q0h-smbqd"/><path class="a9vqcdbes"/><path class="zpu_ag60e"/></g>`,
		"fallback": "glyphs:folder-open-1",
	});
}

export default Component;
