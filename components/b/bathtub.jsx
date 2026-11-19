import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y81860boh.css';
import '../../css/s/snpfdhbkf.css';
import '../../css/n/nfr10bb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y81860boh"/><path class="snpfdhbkf"/><path class="nfr10bb5r"/></g>`,
		"fallback": "andrsrxn:bathtub",
	});
}

export default Component;
