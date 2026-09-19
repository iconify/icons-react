import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq4ep8a-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xq4ep8a-h"/>`,
		"fallback": "griddy-icons:credit-card-cancel",
	});
}

export default Component;
