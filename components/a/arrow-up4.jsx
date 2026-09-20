import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sydwtjb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sydwtjb-i"/>`,
		"fallback": "reicon:arrow-up4",
	});
}

export default Component;
