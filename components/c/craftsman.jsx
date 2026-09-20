import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng1mhigyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng1mhigyk"/>`,
		"fallback": "thesvg:craftsman",
	});
}

export default Component;
