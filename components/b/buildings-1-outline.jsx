import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bv6k9163z.css';
import '../../css/v/v5_422bjr.css';
import '../../css/s/svl8bismt.css';
import '../../css/n/n8_nc4bux.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bv6k9163z"/><path clip-rule="evenodd" class="v5_422bjr"/><path class="svl8bismt"/><path clip-rule="evenodd" class="n8_nc4bux"/></g>`,
		"fallback": "glyphs:buildings-1-outline",
	});
}

export default Component;
