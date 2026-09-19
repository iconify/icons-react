import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bl3km0pue.css';
import '../../css/m/my6h_actc.css';
import '../../css/c/cbfj9ubdj.css';
import '../../css/b/bpelmrbih.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bl3km0pue"/><path clip-rule="evenodd" class="my6h_actc"/><path class="cbfj9ubdj"/><path clip-rule="evenodd" class="bpelmrbih"/></g>`,
		"fallback": "glyphs:gift-card-outline",
	});
}

export default Component;
