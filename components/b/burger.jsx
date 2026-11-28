import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifiw-ct-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifiw-ct-v"/>`,
		"fallback": "noviair:burger",
	});
}

export default Component;
