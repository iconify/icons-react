import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqn26fp0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqn26fp0n"/>`,
		"fallback": "mingcute:add-circle-fill",
	});
}

export default Component;
