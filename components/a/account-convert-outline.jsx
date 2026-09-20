import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3vi22b5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3vi22b5y"/>`,
		"fallback": "mdi:account-convert-outline",
	});
}

export default Component;
