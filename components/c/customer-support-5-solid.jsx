import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii30u3bte.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ii30u3bte"/>`,
		"fallback": "streamline-flex:customer-support-5-solid",
	});
}

export default Component;
