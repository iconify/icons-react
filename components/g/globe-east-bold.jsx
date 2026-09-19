import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bpin_ybto.css';
import '../../css/c/csq7p7s1r.css';
import '../../css/v/v09bwgbwj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bpin_ybto"/><path clip-rule="evenodd" class="csq7p7s1r"/><path class="v09bwgbwj"/></g>`,
		"fallback": "glyphs:globe-east-bold",
	});
}

export default Component;
