import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjijzbbea.css';
import '../../css/y/yc1m2ozal.css';
import '../../css/w/wyztu8njq.css';
import '../../css/q/qzo-8rbyh.css';
import '../../css/q/qat2bttar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rjijzbbea"/><path class="yc1m2ozal"/><path clip-rule="evenodd" class="wyztu8njq"/><path class="qzo-8rbyh"/><path class="qat2bttar"/></g>`,
		"fallback": "andrsrxn:book-lock",
	});
}

export default Component;
