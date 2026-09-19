import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p525h4btq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p525h4btq"/>`,
		"fallback": "hugeicons:delete-put-back",
	});
}

export default Component;
