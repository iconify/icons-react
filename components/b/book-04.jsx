import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spnh1qxhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spnh1qxhu"/>`,
		"fallback": "hugeicons:book-04",
	});
}

export default Component;
