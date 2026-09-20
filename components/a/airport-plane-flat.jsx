import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjccp8b_o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mjccp8b_o"/>`,
		"fallback": "streamline-flex-color:airport-plane-flat",
	});
}

export default Component;
