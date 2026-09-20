import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piv6exxub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="piv6exxub"/>`,
		"fallback": "si:expand-more-square-fill",
	});
}

export default Component;
