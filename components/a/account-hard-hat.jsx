import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xno0b68zg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xno0b68zg"/>`,
		"fallback": "mdi:account-hard-hat",
	});
}

export default Component;
