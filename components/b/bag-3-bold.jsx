import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcol1993k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qcol1993k"/>`,
		"fallback": "solar:bag-3-bold",
	});
}

export default Component;
