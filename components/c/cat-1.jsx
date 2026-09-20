import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/atn8qkutt.css';
import '../../css/p/pkljy7kqs.css';
import '../../css/r/r3x5x1hrf.css';
import '../../css/n/nwesrpb3r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="atn8qkutt"/><path class="pkljy7kqs"/><path class="r3x5x1hrf"/><path class="nwesrpb3r"/></g>`,
		"fallback": "streamline-color:cat-1",
	});
}

export default Component;
