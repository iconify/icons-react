import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya-k_gblv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya-k_gblv"/>`,
		"fallback": "keyline-icons:book-open-sharp-fill",
	});
}

export default Component;
