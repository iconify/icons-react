import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9qwkaj6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9qwkaj6s"/>`,
		"fallback": "coolicons:divider-medium-bulk-round",
	});
}

export default Component;
