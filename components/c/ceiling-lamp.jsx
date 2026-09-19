import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuj2j6pai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuj2j6pai"/>`,
		"fallback": "cbi:ceiling-lamp",
	});
}

export default Component;
