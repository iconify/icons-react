import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o_s0byb3c.css';
import '../../css/y/ymawimbix.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="o_s0byb3c"/><path class="ymawimbix"/></g>`,
		"fallback": "si-glyph:car-garage",
	});
}

export default Component;
