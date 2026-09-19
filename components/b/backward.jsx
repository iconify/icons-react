import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grlezebdn.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grlezebdn"/>`,
		"fallback": "whh:backward",
	});
}

export default Component;
