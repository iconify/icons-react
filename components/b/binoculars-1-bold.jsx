import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wjjtetwqv.css';
import '../../css/k/k1ummubux.css';
import '../../css/k/k_dcn8ndg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wjjtetwqv"/><path class="k1ummubux"/><path class="k_dcn8ndg"/></g>`,
		"fallback": "glyphs:binoculars-1-bold",
	});
}

export default Component;
