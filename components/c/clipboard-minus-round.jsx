import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv237ms-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv237ms-j"/>`,
		"fallback": "coolicons:clipboard-minus-round",
	});
}

export default Component;
