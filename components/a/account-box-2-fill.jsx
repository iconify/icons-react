import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7uyqkbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7uyqkbro"/>`,
		"fallback": "ri:account-box-2-fill",
	});
}

export default Component;
