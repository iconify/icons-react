import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlyoxob2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlyoxob2e"/>`,
		"fallback": "thesvg-color:bluesound",
	});
}

export default Component;
