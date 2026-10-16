import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atn8x1kpb.css';
import '../../css/l/lfo7cvbjq.css';
import '../../css/w/wk-hnobdn.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="atn8x1kpb"><path class="lfo7cvbjq"/><path class="wk-hnobdn"/></g>`,
		"fallback": "thesvg-color:focalboard",
	});
}

export default Component;
