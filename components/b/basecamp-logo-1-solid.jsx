import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im63o6nby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="im63o6nby"/>`,
		"fallback": "streamline-logos:basecamp-logo-1-solid",
	});
}

export default Component;
