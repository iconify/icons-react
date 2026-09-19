import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m286f_qbu.css';
import '../../css/t/tfoblfbjj.css';
import '../../css/s/spm5-2f8h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="m286f_qbu"/><path class="tfoblfbjj"/><path class="spm5-2f8h"/></g>`,
		"fallback": "glyphs:grin-tongue-silly",
	});
}

export default Component;
