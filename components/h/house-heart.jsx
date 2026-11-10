import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xauj5db7u.css';
import '../../css/g/gncm3mi4t.css';
import '../../css/g/gsvrl7yuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xauj5db7u"/><path class="gncm3mi4t"/><path class="gsvrl7yuk"/></g>`,
		"fallback": "andrsrxn:house-heart",
	});
}

export default Component;
