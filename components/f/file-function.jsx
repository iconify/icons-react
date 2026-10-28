import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/crsplxbrf.css';
import '../../css/c/ctkkkdbvq.css';
import '../../css/d/duzaevl3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="crsplxbrf"/><path class="ctkkkdbvq"/><path class="duzaevl3a"/></g>`,
		"fallback": "andrsrxn:file-function",
	});
}

export default Component;
