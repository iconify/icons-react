import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf8xf_biu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf8xf_biu"/>`,
		"fallback": "thesvg-color:coder",
	});
}

export default Component;
