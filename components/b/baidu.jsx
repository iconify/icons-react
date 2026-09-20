import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_icbbc9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_icbbc9t"/>`,
		"fallback": "thesvg-color:baidu",
	});
}

export default Component;
