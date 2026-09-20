import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snz5qfaos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snz5qfaos"/>`,
		"fallback": "mdi:fraction-one-half",
	});
}

export default Component;
