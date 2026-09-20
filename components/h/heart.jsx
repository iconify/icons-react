import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax0vc5bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax0vc5bwh"/>`,
		"fallback": "pixel:heart",
	});
}

export default Component;
