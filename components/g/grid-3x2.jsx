import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbmr7ioil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbmr7ioil"/>`,
		"fallback": "keyline-icons:grid-3x2",
	});
}

export default Component;
