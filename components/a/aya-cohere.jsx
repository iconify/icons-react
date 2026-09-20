import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoku_3brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoku_3brj"/>`,
		"fallback": "thesvg:aya-cohere",
	});
}

export default Component;
