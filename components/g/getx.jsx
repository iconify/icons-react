import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzatx-b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzatx-b-i"/>`,
		"fallback": "thesvg-color:getx",
	});
}

export default Component;
