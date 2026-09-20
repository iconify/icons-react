import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8dmlzbny.css';
import '../../css/h/hmpi2lboc.css';
import '../../css/r/rjpelm1ki.css';
import '../../css/r/rpvif7bvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g8dmlzbny"/><path class="hmpi2lboc"/><path class="rjpelm1ki"/><path class="rpvif7bvk"/></g>`,
		"fallback": "tdesign:drumstick",
	});
}

export default Component;
