import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgiih6s2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgiih6s2c"/>`,
		"fallback": "streamline-ultimate:currency-sign-kips-increase-bold",
	});
}

export default Component;
