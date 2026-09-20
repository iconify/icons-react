import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc70u4buk.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc70u4buk"/>`,
		"fallback": "jam:gift-f",
	});
}

export default Component;
