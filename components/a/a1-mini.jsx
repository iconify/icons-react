import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trw6j0drs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trw6j0drs"/>`,
		"fallback": "cbi:a1-mini",
	});
}

export default Component;
