import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwrgo5b_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwrgo5b_h"/>`,
		"fallback": "cbi:fortaleza",
	});
}

export default Component;
