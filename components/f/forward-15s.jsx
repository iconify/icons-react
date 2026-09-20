import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ces36_uah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ces36_uah"/>`,
		"fallback": "reicon:forward-15s",
	});
}

export default Component;
