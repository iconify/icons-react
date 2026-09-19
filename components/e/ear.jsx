import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ok34kmysb.css';
import '../../css/n/n6ozzz-ar.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ok34kmysb"/><path class="n6ozzz-ar"/></g>`,
		"fallback": "glyphs:ear",
	});
}

export default Component;
