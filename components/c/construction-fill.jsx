import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcsul_bit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcsul_bit"/>`,
		"fallback": "mingcute:construction-fill",
	});
}

export default Component;
