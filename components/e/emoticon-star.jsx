import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugeu1-b-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugeu1-b-p"/>`,
		"fallback": "mdi:emoticon-star",
	});
}

export default Component;
