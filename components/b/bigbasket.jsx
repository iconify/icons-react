import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbuy38iwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbuy38iwh"/>`,
		"fallback": "thesvg-color:bigbasket",
	});
}

export default Component;
