import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8k0e_bad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8k0e_bad"/>`,
		"fallback": "tabler:border-outer",
	});
}

export default Component;
