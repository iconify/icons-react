import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuemf_bgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuemf_bgi"/>`,
		"fallback": "hugeicons:dashed-line-01",
	});
}

export default Component;
