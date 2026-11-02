import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywe0yq7db.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywe0yq7db"/>`,
		"fallback": "mingcute:exchange-euro-fill",
	});
}

export default Component;
