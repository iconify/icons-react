import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlxe_2blb.css';
import '../../css/v/viv7oac8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlxe_2blb"/><path class="viv7oac8a"/>`,
		"fallback": "boxicons:credit-card-insert",
	});
}

export default Component;
