import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uov_89a-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uov_89a-y"/>`,
		"fallback": "ri:compasses-fill",
	});
}

export default Component;
