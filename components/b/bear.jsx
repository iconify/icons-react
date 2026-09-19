import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wavzmlbog.css';
import '../../css/r/rsfam3bse.css';
import '../../css/w/wszkdmbyl.css';
import '../../css/k/k6j5q39vn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wavzmlbog"/><path class="rsfam3bse"/><path class="wszkdmbyl"/><path class="k6j5q39vn"/></g>`,
		"fallback": "fluent-emoji-flat:bear",
	});
}

export default Component;
