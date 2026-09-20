import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5diqgc_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5diqgc_h"/>`,
		"fallback": "tabler:brand-tesla",
	});
}

export default Component;
