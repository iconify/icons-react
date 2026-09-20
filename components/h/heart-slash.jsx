import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb4-mjx0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb4-mjx0a"/>`,
		"fallback": "reicon:heart-slash",
	});
}

export default Component;
