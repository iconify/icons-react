import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/phnqa-sct.css';
import '../../css/i/i_gzth2hn.css';
import '../../css/y/ym1i86buz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="phnqa-sct"/><path class="i_gzth2hn"/><path class="ym1i86buz"/></g>`,
		"fallback": "streamline-freehand:donation-charity-donate-bag-2",
	});
}

export default Component;
