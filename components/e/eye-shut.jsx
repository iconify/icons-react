import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcmho_b6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcmho_b6z"/>`,
		"fallback": "mdi:eye-shut",
	});
}

export default Component;
