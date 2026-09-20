import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z99e7peet.css';
import '../../css/g/g3b3ld1qa.css';
import '../../css/g/gcgaqnbdb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z99e7peet"/><path class="g3b3ld1qa"/><path class="gcgaqnbdb"/></g>`,
		"fallback": "streamline-color:fingerprint-2",
	});
}

export default Component;
