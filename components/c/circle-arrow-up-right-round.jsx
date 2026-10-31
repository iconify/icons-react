import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1i4gnl2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1i4gnl2c"/>`,
		"fallback": "coolicons:circle-arrow-up-right-round",
	});
}

export default Component;
