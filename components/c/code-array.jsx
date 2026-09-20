import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbi20vb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbi20vb9l"/>`,
		"fallback": "mdi:code-array",
	});
}

export default Component;
