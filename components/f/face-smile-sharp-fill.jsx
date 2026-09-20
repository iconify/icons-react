import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yevwt22qo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yevwt22qo"/>`,
		"fallback": "keyline-icons:face-smile-sharp-fill",
	});
}

export default Component;
