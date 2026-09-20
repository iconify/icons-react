import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjp8bhb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjp8bhb5z"/>`,
		"fallback": "mdi-light:format-list-numbers",
	});
}

export default Component;
