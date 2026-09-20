import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp9czab_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mp9czab_u"/>`,
		"fallback": "solar:bill-list-bold",
	});
}

export default Component;
