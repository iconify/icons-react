import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry6677b8a.css';
import '../../css/n/nazq8_bnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ry6677b8a"/><path class="nazq8_bnr"/>`,
		"fallback": "solar:copy-minus-bold",
	});
}

export default Component;
