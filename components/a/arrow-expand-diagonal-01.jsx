import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixfbf2bdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixfbf2bdb"/>`,
		"fallback": "hugeicons:arrow-expand-diagonal-01",
	});
}

export default Component;
