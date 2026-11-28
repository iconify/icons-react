import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm7bg7waf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm7bg7waf"/>`,
		"fallback": "noviair-light:calendar",
	});
}

export default Component;
