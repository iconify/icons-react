import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyoixcc3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyoixcc3v"/>`,
		"fallback": "mdi:account-file-text",
	});
}

export default Component;
