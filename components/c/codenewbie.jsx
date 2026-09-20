import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m65wjx7pm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m65wjx7pm"/>`,
		"fallback": "thesvg-color:codenewbie",
	});
}

export default Component;
