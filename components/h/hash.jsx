import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu58r9bbu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu58r9bbu"/>`,
		"fallback": "pinhead:hash",
	});
}

export default Component;
