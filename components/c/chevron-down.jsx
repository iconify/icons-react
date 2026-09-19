import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9ev0mbaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9ev0mbaf"/>`,
		"fallback": "akar-icons:chevron-down",
	});
}

export default Component;
