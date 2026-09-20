import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwp21cyvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwp21cyvy"/>`,
		"fallback": "mdi:format-colour-highlight",
	});
}

export default Component;
