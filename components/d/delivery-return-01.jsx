import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmy73kbjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmy73kbjd"/>`,
		"fallback": "hugeicons:delivery-return-01",
	});
}

export default Component;
