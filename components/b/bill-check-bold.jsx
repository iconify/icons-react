import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm9i-e9gu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cm9i-e9gu"/>`,
		"fallback": "solar:bill-check-bold",
	});
}

export default Component;
