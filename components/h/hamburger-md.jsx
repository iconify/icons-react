import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw36-dbmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw36-dbmj"/>`,
		"fallback": "ci:hamburger-md",
	});
}

export default Component;
