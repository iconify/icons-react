import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc722rblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc722rblm"/>`,
		"fallback": "thesvg:copa-airlines",
	});
}

export default Component;
