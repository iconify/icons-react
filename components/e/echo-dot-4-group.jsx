import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_2i16b-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_2i16b-p"/>`,
		"fallback": "cbi:echo-dot-4-group",
	});
}

export default Component;
