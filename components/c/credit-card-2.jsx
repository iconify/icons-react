import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/d/dg080pzed.css';
import '../../css/l/l6923nr5e.css';
import '../../css/i/i0s05vb_w.css';
import '../../css/i/i86ghbb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="dg080pzed"/><path class="l6923nr5e"/><path class="i0s05vb_w"/><path class="i86ghbb4z"/></g>`,
		"fallback": "streamline-sharp-color:credit-card-2",
	});
}

export default Component;
