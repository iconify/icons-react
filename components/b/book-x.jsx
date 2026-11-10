import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wd5nfrbkw.css';
import '../../css/s/syu27vuve.css';
import '../../css/z/zayp6_xeg.css';
import '../../css/a/auq-e_b7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wd5nfrbkw"/><path class="syu27vuve"/><path class="zayp6_xeg"/><path class="auq-e_b7y"/></g>`,
		"fallback": "andrsrxn:book-x",
	});
}

export default Component;
