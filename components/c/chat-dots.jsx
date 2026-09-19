import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui6ez8s7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui6ez8s7c"/>`,
		"fallback": "ci:chat-dots",
	});
}

export default Component;
