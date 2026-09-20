import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yov6v4b-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yov6v4b-l"/>`,
		"fallback": "streamline-ultimate:curly-brackets-bold",
	});
}

export default Component;
