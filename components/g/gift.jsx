import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t29596blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t29596blc"/>`,
		"fallback": "reicon:gift",
	});
}

export default Component;
