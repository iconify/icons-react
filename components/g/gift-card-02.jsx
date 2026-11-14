import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpik002ck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpik002ck"/>`,
		"fallback": "hugeicons:gift-card-02",
	});
}

export default Component;
