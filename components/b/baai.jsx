import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-r151b9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i-r151b9c"/>`,
		"fallback": "thesvg:baai",
	});
}

export default Component;
