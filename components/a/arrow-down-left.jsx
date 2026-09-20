import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npxu85a6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npxu85a6b"/>`,
		"fallback": "reicon:arrow-down-left",
	});
}

export default Component;
