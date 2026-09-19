import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3q8ujb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3q8ujb9s"/>`,
		"fallback": "hugeicons:biceps-flexed",
	});
}

export default Component;
