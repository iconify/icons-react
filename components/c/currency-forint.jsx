import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y132o_brm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y132o_brm"/>`,
		"fallback": "tabler:currency-forint",
	});
}

export default Component;
