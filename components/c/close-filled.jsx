import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6vh3dbqm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6vh3dbqm"/>`,
		"fallback": "carbon:close-filled",
	});
}

export default Component;
