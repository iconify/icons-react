import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npvw37byp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npvw37byp"/>`,
		"fallback": "ri:account-box-line",
	});
}

export default Component;
