import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf-1w2b_n.css';
import '../../css/l/lsy2hwxsm.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGIRhXtcEG" class="jf-1w2b_n"/></defs><use href="#SVGIRhXtcEG" class="lsy2hwxsm"/><use href="#SVGIRhXtcEG" class="ij2x_72vy"/>`,
		"fallback": "openmoji:counterclockwise-arrows-button",
	});
}

export default Component;
