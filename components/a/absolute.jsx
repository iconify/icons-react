import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xqmepvbqz.css';
import '../../css/j/j36ww4b-u.css';
import '../../css/c/cn4bvt4si.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xqmepvbqz"/><path class="j36ww4b-u"/><path class="cn4bvt4si"/></g>`,
		"fallback": "hugeicons:absolute",
	});
}

export default Component;
