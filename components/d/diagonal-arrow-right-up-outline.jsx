import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfuo3_qvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfuo3_qvl"/>`,
		"fallback": "eva:diagonal-arrow-right-up-outline",
	});
}

export default Component;
