import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zav3g9j2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zav3g9j2t"/>`,
		"fallback": "griddy-icons:credit-cards",
	});
}

export default Component;
