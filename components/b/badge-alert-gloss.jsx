import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywxtu1jxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywxtu1jxg"/>`,
		"fallback": "withicons:badge-alert-gloss",
	});
}

export default Component;
