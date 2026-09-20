import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4mtfqb_h.css';
import '../../css/r/racdv353u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4mtfqb_h"/><path class="racdv353u"/>`,
		"fallback": "tdesign:guitar-filled",
	});
}

export default Component;
