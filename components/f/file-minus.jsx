import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhqz6verd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhqz6verd"/>`,
		"fallback": "mdi:file-minus",
	});
}

export default Component;
