import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptuaum2kl.css';
import '../../css/s/sjkgzrkue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ptuaum2kl"/><path class="sjkgzrkue"/></g>`,
		"fallback": "andrsrxn:film",
	});
}

export default Component;
