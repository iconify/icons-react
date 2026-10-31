import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoena0bol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoena0bol"/>`,
		"fallback": "coolicons:clock-11-fill-round",
	});
}

export default Component;
