import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejytsk_lp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejytsk_lp"/>`,
		"fallback": "hugeicons:call-end-01",
	});
}

export default Component;
