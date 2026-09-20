import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt4c_3bmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt4c_3bmg"/>`,
		"fallback": "mdi:arrow-compress-right",
	});
}

export default Component;
