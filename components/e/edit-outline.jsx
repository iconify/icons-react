import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5szvdnvs.css';
import '../../css/d/ddymbxshg.css';
import '../../css/n/nwj63hb-m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c5szvdnvs"/><path class="ddymbxshg"/><path class="nwj63hb-m"/></g>`,
		"fallback": "glyphs:edit-outline",
	});
}

export default Component;
