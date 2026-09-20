import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxo7ufhlf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxo7ufhlf"/>`,
		"fallback": "thesvg-color:deluge",
	});
}

export default Component;
