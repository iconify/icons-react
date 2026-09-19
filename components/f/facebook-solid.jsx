import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_53bcn2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_53bcn2u"/>`,
		"fallback": "basil:facebook-solid",
	});
}

export default Component;
