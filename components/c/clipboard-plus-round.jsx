import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfzeh9bqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfzeh9bqy"/>`,
		"fallback": "coolicons:clipboard-plus-round",
	});
}

export default Component;
