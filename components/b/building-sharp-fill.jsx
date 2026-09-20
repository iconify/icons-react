import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwf82ffby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jwf82ffby"/>`,
		"fallback": "keyline-icons:building-sharp-fill",
	});
}

export default Component;
