import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-sah7b2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-sah7b2w"/>`,
		"fallback": "noviair:earbuds-check",
	});
}

export default Component;
