import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnj5y5did.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnj5y5did"/>`,
		"fallback": "thesvg-color:hackaday",
	});
}

export default Component;
