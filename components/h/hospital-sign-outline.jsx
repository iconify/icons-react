import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gujmhe0yt.css';
import '../../css/w/whtc4r5ex.css';
import '../../css/g/gvzi7_7ij.css';
import '../../css/s/suljz2g3l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gujmhe0yt"/><path clip-rule="evenodd" class="whtc4r5ex"/><path class="gvzi7_7ij"/><path clip-rule="evenodd" class="suljz2g3l"/></g>`,
		"fallback": "glyphs:hospital-sign-outline",
	});
}

export default Component;
