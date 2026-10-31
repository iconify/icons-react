import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdbc1eb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdbc1eb4p"/>`,
		"fallback": "coolicons:circle-chevron-double-up-round",
	});
}

export default Component;
