import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljkx69bul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljkx69bul"/>`,
		"fallback": "lets-icons:expand-down-double",
	});
}

export default Component;
