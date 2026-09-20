import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxogo41px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxogo41px"/>`,
		"fallback": "mdi:contact-phone",
	});
}

export default Component;
