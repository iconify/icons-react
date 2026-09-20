import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djhgdub4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djhgdub4l"/>`,
		"fallback": "simple-icons:buymeacoffee",
	});
}

export default Component;
