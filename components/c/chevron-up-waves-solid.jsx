import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs_4bcclq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs_4bcclq"/>`,
		"fallback": "mynaui:chevron-up-waves-solid",
	});
}

export default Component;
