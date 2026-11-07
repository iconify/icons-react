import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3h3pubhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s3h3pubhl"/>`,
		"fallback": "solar:bag-5-bold",
	});
}

export default Component;
