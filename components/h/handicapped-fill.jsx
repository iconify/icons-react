import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erv20k74w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erv20k74w"/>`,
		"fallback": "mage:handicapped-fill",
	});
}

export default Component;
