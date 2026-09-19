import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uvxngrb6q.css';
import '../../css/a/agtqjebkp.css';
import '../../css/z/zcm883c4b.css';
import '../../css/n/n2kkpqb1j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uvxngrb6q"/><path clip-rule="evenodd" class="agtqjebkp"/><path class="zcm883c4b"/><path clip-rule="evenodd" class="n2kkpqb1j"/></g>`,
		"fallback": "glyphs:building-3-outline",
	});
}

export default Component;
