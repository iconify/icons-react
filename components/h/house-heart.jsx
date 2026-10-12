import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xauj5db7u.css';
import '../../css/y/y5rx7925u.css';
import '../../css/w/wd4bqobhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xauj5db7u"/><path class="y5rx7925u"/><path class="wd4bqobhz"/></g>`,
		"fallback": "andrsrxn:house-heart",
	});
}

export default Component;
