import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adm3ltb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adm3ltb9z"/>`,
		"fallback": "hugeicons:ai-replace",
	});
}

export default Component;
