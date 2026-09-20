import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhkncj6rg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhkncj6rg"/>`,
		"fallback": "si:flow-line-line",
	});
}

export default Component;
