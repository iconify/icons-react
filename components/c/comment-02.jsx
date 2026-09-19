import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj8wdoo8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj8wdoo8u"/>`,
		"fallback": "hugeicons:comment-02",
	});
}

export default Component;
