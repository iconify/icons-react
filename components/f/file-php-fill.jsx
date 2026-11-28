import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgnxkc84e.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgnxkc84e"/>`,
		"fallback": "pullo:file-php-fill",
	});
}

export default Component;
