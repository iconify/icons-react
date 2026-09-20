import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdwa4wbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdwa4wbix"/>`,
		"fallback": "mdi:code-equal",
	});
}

export default Component;
