import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnsjq8i2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnsjq8i2v"/>`,
		"fallback": "thesvg-color:air-serbia",
	});
}

export default Component;
