import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prqma6b6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prqma6b6y"/>`,
		"fallback": "reicon:cart-large3-filled",
	});
}

export default Component;
