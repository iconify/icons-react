import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da52_eirn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da52_eirn"/>`,
		"fallback": "hugeicons:heading-01",
	});
}

export default Component;
