import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzao_8bmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzao_8bmn"/>`,
		"fallback": "ri:delete-bin-fill",
	});
}

export default Component;
