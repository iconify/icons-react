import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqa16qcmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqa16qcmv"/>`,
		"fallback": "hugeicons:chess-01",
	});
}

export default Component;
