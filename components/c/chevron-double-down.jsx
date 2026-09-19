import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzq91cpzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzq91cpzs"/>`,
		"fallback": "heroicons:chevron-double-down",
	});
}

export default Component;
