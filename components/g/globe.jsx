import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw_ai_brw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw_ai_brw"/>`,
		"fallback": "heroicons-outline:globe",
	});
}

export default Component;
