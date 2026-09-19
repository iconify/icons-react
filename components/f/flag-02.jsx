import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-2zj3b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-2zj3b7p"/>`,
		"fallback": "hugeicons:flag-02",
	});
}

export default Component;
